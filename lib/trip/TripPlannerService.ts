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
   */
  async planTrip(
    input: AIPlannerInput
  ): Promise<EnrichedTripPlan> {
    // 1. Get AI itinerary (validated)
    const aiPlan =
      await this.aiProvider.generateItinerary(input)

    // 2. Enrich itinerary with images
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

    return {
      ...aiPlan,
      itinerary: enrichedItinerary,
    }
  }
}
