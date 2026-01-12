// lib/ai/GroqProvider.ts
import Groq from "groq-sdk";
import { AIProvider, AIPlannerInput } from "./AIProvider";
import { AIItineraryResponse } from "@/types/ai-itinerary";
import { buildGeminiPrompt } from "./prompts";
import { AIItinerarySchema } from "@/types/ai-itinerary.schema";

const MODELS = [
  "llama-3.1-70b-versatile",
  "llama-3.1-8b-instant",
];

export class GroqProvider implements AIProvider {
  private client: Groq;

  constructor() {
    if (!process.env.GROQ_API_KEY) {
      throw new Error("GROQ_API_KEY is missing");
    }

    this.client = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }

  async generateItinerary(
    input: AIPlannerInput
  ): Promise<AIItineraryResponse> {
    const prompt = buildGeminiPrompt(input);

    let lastError: unknown = "Unknown Groq failure";

    for (const model of MODELS) {
      try {
        const completion = await this.client.chat.completions.create({
          model,
          temperature: 0.3,
          messages: [
            {
              role: "system",
              content:
                "You are a backend travel-planning API. Output ONLY valid JSON. No explanations.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        });

        const rawText =
          completion.choices[0]?.message?.content;

        if (!rawText) {
          throw new Error("Groq returned empty response");
        }

        let parsedJson: unknown;

        try {
          parsedJson = JSON.parse(rawText.trim());
        } catch {
          throw new Error("Groq response is not valid JSON");
        }

        const validationResult =
          AIItinerarySchema.safeParse(parsedJson);

        if (!validationResult.success) {
          console.error(
            "❌ Groq schema validation failed:",
            validationResult.error.format()
          );
          throw new Error(
            "Groq response does not match itinerary schema"
          );
        }

        // ✅ SUCCESS
        return validationResult.data;
      } catch (error) {
        lastError = error;
        console.warn(
          `⚠️ Groq model ${model} failed`,
          error
        );
      }
    }

    throw new Error(
      `All Groq models failed. Last error: ${String(lastError)}`
    );
  }
}
