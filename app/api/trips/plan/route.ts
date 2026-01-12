// types/api.ts (optional but recommended)
export interface TripPlanRequest {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: "Solo" | "Couple" | "Family" | "Friends";
  budgetRange: string;
  pace: "Relaxed" | "Moderate" | "Fast";
  interests: string[];
  mustVisit?: string[];
}

// app/api/trip/plan/route.ts
import { NextRequest, NextResponse } from "next/server";

import { GeminiProvider } from "@/lib/ai/GeminiProvider";
import { OpenAIProvider } from "@/lib/ai/OpenAIProvider";
import { GroqProvider } from "@/lib/ai/GroqProvider";
import { TripPlannerService } from "@/lib/trip/TripPlannerService";
import { UnsplashProvider } from "@/lib/images/UnsplashProvider";
import { AIPlannerInput } from "@/lib/ai/AIProvider";

export async function POST(req: NextRequest) {
  try {
    // 1️⃣ Parse request body
    const body = await req.json();

    const {
      destination,
      startDate,
      endDate,
      travelers,
      budgetRange,
      pace,
      interests,
      mustVisit,
    } = body;

    // 2️⃣ Basic validation (lightweight on purpose)
    if (
      !destination ||
      !startDate ||
      !endDate ||
      !travelers ||
      !budgetRange ||
      !pace ||
      !Array.isArray(interests)
    ) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 }
      );
    }

    // 3️⃣ Calculate total days
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const totalDays = Math.max(
      1,
      Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
    );

    // 4️⃣ Normalize input for AI
    const aiInput: AIPlannerInput = {
      destination,
      startDate,
      endDate,
      totalDays,
      travelers,
      budgetRange,
      pace,
      interests,
      mustVisit,
    };

    // 5️⃣ Create services
    // const aiProvider = new GeminiProvider();
    // const aiProvider = new OpenAIProvider();
    const aiProvider = new GroqProvider();
    const imageProvider = new UnsplashProvider();
    const tripPlanner = new TripPlannerService(aiProvider, imageProvider);

    // 6️⃣ Generate trip plan
    const tripPlan = await tripPlanner.planTrip(aiInput);

    // 7️⃣ Return response
    return NextResponse.json(tripPlan, { status: 200 });
  } catch (error: any) {
    console.error("Trip planning failed:", error);

    return NextResponse.json(
      {
        error: "Failed to generate trip plan",
        message: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
