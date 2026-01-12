import { z } from "zod"
import { AIItinerarySchema } from "./ai-itinerary.schema"

export type AIItineraryResponse = z.infer<
  typeof AIItinerarySchema
>
