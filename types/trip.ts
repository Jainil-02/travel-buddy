// types/trip.ts
import { AIItineraryResponse } from "./ai-itinerary"

export interface EnrichedActivity {
  name: string
  category: string
  time_of_day: string
  duration_hours: number
  description: string
  entry_type: string
  intensity: string
  images: string[]
}

export interface EnrichedDay {
  day: number
  title: string
  theme: string
  activities: EnrichedActivity[]
}

export interface EnrichedTripPlan
  extends Omit<AIItineraryResponse, "itinerary"> {
  itinerary: EnrichedDay[]
}
