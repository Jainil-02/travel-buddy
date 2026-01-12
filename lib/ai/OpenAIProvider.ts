// lib/ai/OpenAIProvider.ts
import OpenAI from "openai";
import { AIProvider, AIPlannerInput } from "./AIProvider";
import { AIItineraryResponse } from "@/types/ai-itinerary";
import { buildGeminiPrompt } from "./prompts";
import { AIItinerarySchema } from "@/types/ai-itinerary.schema";

export class OpenAIProvider implements AIProvider {
  private client: OpenAI;

  constructor() {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is missing");
    }

    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateItinerary(
    input: AIPlannerInput
  ): Promise<AIItineraryResponse> {
    const prompt = buildGeminiPrompt(input);

    const completion = await this.client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      response_format: { type: "json_object" },
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

    const rawText = completion.choices[0]?.message?.content;

    if (!rawText) {
      throw new Error("OpenAI returned empty response");
    }

    let parsedJson: unknown;

    try {
      parsedJson = JSON.parse(rawText.trim());
    } catch {
      throw new Error("OpenAI response is not valid JSON");
    }

    const validationResult =
      AIItinerarySchema.safeParse(parsedJson);

    if (!validationResult.success) {
      console.error(
        "❌ OpenAI schema validation failed:",
        validationResult.error.format()
      );
      throw new Error("OpenAI response does not match itinerary schema");
    }

    return validationResult.data;
  }
}
