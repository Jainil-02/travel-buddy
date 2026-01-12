// lib/ai/AIProvider.ts
import { AIItineraryResponse } from "@/types/ai-itinerary"

export interface AIProvider {
  generateItinerary(input: AIPlannerInput): Promise<AIItineraryResponse>
}

/**
 * Input the backend sends to AI (normalized form data)
 */
export interface AIPlannerInput {
  destination: string
  startDate: string
  endDate: string
  totalDays: number
  travelers: "Solo" | "Couple" | "Family" | "Friends"
  budgetRange: string
  pace: "Relaxed" | "Moderate" | "Fast"
  interests: string[]
  mustVisit?: string[]
}
