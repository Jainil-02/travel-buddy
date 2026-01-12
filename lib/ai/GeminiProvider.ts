// lib/ai/GeminiProvider.ts
import { AIProvider, AIPlannerInput } from "./AIProvider";
import { AIItineraryResponse } from "@/types/ai-itinerary";
import { buildGeminiPrompt } from "./prompts";
import { AIItinerarySchema } from "@/types/ai-itinerary.schema";

/**
 * Gemini models in priority order
 */
const GEMINI_MODELS = [
  "gemini-2.5-flash",
  "gemini-flash-latest",
  "gemini-2.0-flash",
];

const BASE_URL =
  "https://generativelanguage.googleapis.com/v1beta/models";

/**
 * GLOBAL RATE LIMIT COOLDOWN
 */
let lastRateLimitAt: number | null = null;
const RATE_LIMIT_COOLDOWN_MS = 60_000; // 1 minute

/**
 * Helper: delay execution
 */
const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Helper: Extract valid JSON from Gemini output
 */
function extractJson(text: string): unknown {
  const cleaned = text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) {
    throw new Error("No JSON object found in Gemini response");
  }

  return JSON.parse(cleaned.slice(firstBrace, lastBrace + 1));
}

export class GeminiProvider implements AIProvider {
  private apiKey: string;

  constructor() {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is missing");
    }
    this.apiKey = process.env.GEMINI_API_KEY;
  }

  async generateItinerary(
    input: AIPlannerInput
  ): Promise<AIItineraryResponse> {

    // ⛔ GLOBAL COOLDOWN CHECK
    if (
      lastRateLimitAt &&
      Date.now() - lastRateLimitAt < RATE_LIMIT_COOLDOWN_MS
    ) {
      throw new Error("RATE_LIMITED_COOLDOWN");
    }

    const prompt = buildGeminiPrompt(input);

    let lastError: unknown = "Unknown Gemini failure";

    for (const model of GEMINI_MODELS) {
      const url = `${BASE_URL}/${model}:generateContent?key=${this.apiKey}`;

      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [{ text: prompt }],
                },
              ],
              generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 4096,
                responseMimeType: "application/json",
              },
            }),
          });

          if (!response.ok) {
            // 🚫 HARD STOP on rate limit
            if (response.status === 429) {
              lastRateLimitAt = Date.now();
              throw new Error("RATE_LIMITED");
            }

            // Retryable overload
            if (response.status === 503) {
              await sleep(1000);
              continue;
            }

            // Fallback to next model
            if (response.status === 404) {
              break;
            }

            throw new Error(
              `Gemini API error (${model}): ${response.status}`
            );
          }

          const data = await response.json();

          const parts =
            data?.candidates?.[0]?.content?.parts;

          if (!Array.isArray(parts)) {
            throw new Error("Gemini returned no content parts");
          }

          // 🔑 CRITICAL: merge ALL text parts
          const combinedText = parts
            .map((p: any) => p.text)
            .filter(Boolean)
            .join("\n");

          if (!combinedText) {
            throw new Error("Gemini returned empty text output");
          }

          const parsedJson = extractJson(combinedText);

          // 🔍 Schema validation
          const validationResult =
            AIItinerarySchema.safeParse(parsedJson);

          if (!validationResult.success) {
            console.error("❌ Gemini raw JSON:", parsedJson);
            console.error(
              "❌ Zod errors:",
              validationResult.error.flatten()
            );
            throw new Error(
              "Gemini response does not match itinerary schema"
            );
          }

          // ✅ SUCCESS
          return validationResult.data;
        } catch (error: any) {
          lastError = error?.message || error;

          // ⛔ STOP immediately on rate limit
          if (error?.message === "RATE_LIMITED") {
            throw error;
          }
        }
      }
    }

    throw new Error(
      `All Gemini models failed. Last error: ${String(lastError)}`
    );
  }
}
