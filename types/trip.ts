// types/trip.ts
export interface TripPlanResponse {
  meta: {
    destination: string
    trip_type: string
    travelers: string
    pace: string
    total_days: number
  }
  summary: {
    overview: string
  }
  cost_estimate: {
    currency: string
    breakdown: {
      flights: number
      accommodation: number
      activities: number
      food_misc: number
    }
    total_estimated: number
    note: string
  }
  itinerary: any[]
  recommended_stays: any[]
}
