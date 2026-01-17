import { AIProvider, AIPlannerInput } from "@/lib/ai/AIProvider";
import { ImageProvider } from "@/lib/images/ImageProvider";
import { EnrichedTripPlan, EnrichedActivity } from "@/types/trip";
import { prisma } from "@/lib/prisma";

import { normalizePlannerInput } from "./normalizePlannerInput";
import { normalizeItinerary } from "./normalizeItinerary";
// import { getHeroImage } from "@/lib/images/getHeroImage";
import { getHeroImage } from "../images/getHeroImages";

export class TripPlannerService {
  private aiProvider: AIProvider;
  private imageProvider: ImageProvider;

  constructor(aiProvider: AIProvider, imageProvider: ImageProvider) {
    this.aiProvider = aiProvider;
    this.imageProvider = imageProvider;
  }

  /**
   * Generates a full trip plan enriched with images
   * Includes retry logic for AI instability
   * Auto-saves the trip as DRAFT
   */
  async planTrip(
    input: AIPlannerInput
  ): Promise<EnrichedTripPlan & { tripId: string }> {
    const MAX_ATTEMPTS = 2;
    let lastError: unknown = null;

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        console.log(`🧠 AI planning attempt ${attempt}/${MAX_ATTEMPTS}`);

        // 1️⃣ Normalize input (spelling, casing, whitespace)
        const cleanInput = normalizePlannerInput(input);

        // 2️⃣ Generate AI itinerary (already schema-validated)
        const aiPlan = await this.aiProvider.generateItinerary(cleanInput);

        // 3️⃣ Normalize itinerary (guarantee ≥2 activities/day)
        const normalizedItinerary = normalizeItinerary(
          aiPlan.itinerary
        );

        // 4️⃣ Enrich activities with images
        const enrichedItinerary = await Promise.all(
          normalizedItinerary.map(async (day) => {
            const enrichedActivities: EnrichedActivity[] =
              await Promise.all(
                day.activities.map(async (activity) => {
                  const images =
                    await this.imageProvider.getImages(
                      `${activity.name}, ${aiPlan.meta.destination}, landmark`
                    );

                  return {
                    ...activity,
                    images,
                  };
                })
              );

            return {
              ...day,
              activities: enrichedActivities,
            };
          })
        );

        // 5️⃣ Generate HERO image (destination-level, NOT activity-level)
        const heroImage = await getHeroImage(
          aiPlan.meta.destination,
          this.imageProvider
        );

        // 6️⃣ Persist trip as DRAFT (anonymous-safe)
        const trip = await prisma.trip.create({
          data: {
            destination: input.destination,
            startDate: new Date(input.startDate),
            endDate: new Date(input.endDate),
            travelers: input.travelers,
            budgetRange: input.budgetRange,
            pace: input.pace,
            interests: input.interests,
            mustVisit: input.mustVisit,
            itinerary: enrichedItinerary,
            status: "DRAFT",
            userId: null,
          },
        });

        // ✅ Success → return enriched response
        return {
          ...aiPlan,
          itinerary: enrichedItinerary,
          meta: {
            ...aiPlan.meta,
            hero_image: heroImage, // ⭐ NEW
          },
          tripId: trip.id,
        };
      } catch (error) {
        lastError = error;
        console.warn(
          `⚠️ AI attempt ${attempt} failed:`,
          (error as Error)?.message
        );
      }
    }

    // ❌ All retries failed
    throw new Error(
      `All AI attempts failed. Last error: ${
        (lastError as Error)?.message
      }`
    );
  }
}
