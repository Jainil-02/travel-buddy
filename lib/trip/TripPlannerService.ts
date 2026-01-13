// lib/trip/TripPlannerService.ts
import { AIProvider, AIPlannerInput } from "@/lib/ai/AIProvider"
import { ImageProvider } from "@/lib/images/ImageProvider"
import {
  EnrichedTripPlan,
  EnrichedActivity,
} from "@/types/trip"

export class TripPlannerService {
  private aiProvider: AIProvider
  private imageProvider: ImageProvider

  constructor(
    aiProvider: AIProvider,
    imageProvider: ImageProvider
  ) {
    this.aiProvider = aiProvider
    this.imageProvider = imageProvider
  }

  /**
   * Generates a full trip plan enriched with images
   * Includes retry logic for AI instability
   */
  async planTrip(
    input: AIPlannerInput
  ): Promise<EnrichedTripPlan> {
    const MAX_ATTEMPTS = 2
    let lastError: unknown = null

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        console.log(`🧠 AI planning attempt ${attempt}/${MAX_ATTEMPTS}`)

        // 1️⃣ Get AI itinerary (validated)
        const aiPlan =
          await this.aiProvider.generateItinerary(input)

        // 2️⃣ Enrich itinerary with images
        const enrichedItinerary = await Promise.all(
          aiPlan.itinerary.map(async (day) => {
            const enrichedActivities: EnrichedActivity[] =
              await Promise.all(
                day.activities.map(async (activity) => {
                  const images =
                    await this.imageProvider.getImages(
                      `${activity.name} ${aiPlan.meta.destination}`
                    )

                  return {
                    ...activity,
                    images,
                  }
                })
              )

            return {
              ...day,
              activities: enrichedActivities,
            }
          })
        )

        // ✅ Success → return immediately
        return {
          ...aiPlan,
          itinerary: enrichedItinerary,
        }
      } catch (error) {
        lastError = error
        console.warn(
          `⚠️ AI attempt ${attempt} failed:`,
          (error as Error)?.message
        )
      }
    }

    // ❌ All retries failed
    throw new Error(
      `All AI attempts failed. Last error: ${(lastError as Error)?.message}`
    )
  }
}
