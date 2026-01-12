// types/ai-itinerary.ts

export interface AIItineraryResponse {
  meta: AIMeta;
  summary: AISummary;
  cost_estimate: AICostEstimate;
  itinerary: AIDay[];
  recommended_stays: AIRecommendedStay[];
}

export interface AIMeta {
  destination: string;
  trip_type: string;
  travelers: "Solo" | "Couple" | "Family" | "Friends";
  pace: "Relaxed" | "Moderate" | "Fast";
  total_days: number;
}

export interface AISummary {
  overview: string;
}

export interface AICostEstimate {
  currency: string;
  breakdown: {
    flights: number;
    accommodation: number;
    activities: number;
    food_misc: number;
  };
  total_estimated: number;
  note?: string;
}

export interface AIDay {
  day: number;
  title: string;
  theme: string;
  activities: AIActivity[];
}

export interface AIActivity {
  name: string;
  category:
    | "temple"
    | "shrine"
    | "food_market"
    | "restaurant"
    | "neighborhood"
    | "museum"
    | "nature"
    | "shopping"
    | "experience";

  time_of_day: "morning" | "afternoon" | "evening" | "night";
  duration_hours: number;
  description: string;

  entry_type: "free" | "paid";
  intensity: "relaxed" | "light_walk" | "moderate_walk" | "active";
}

export interface AIRecommendedStay {
  area: string;
  stay_type:
    | "Boutique Hotel"
    | "Modern Hotel"
    | "Luxury Hotel"
    | "Budget Hotel";

  price_range_per_night: {
    min: number;
    max: number;
  };

  rating_expectation: number;
  why_recommended: string;
}

export function isAIItineraryResponse(data: any): data is AIItineraryResponse {
  return (
    data &&
    typeof data === "object" &&
    typeof data.meta?.destination === "string" &&
    Array.isArray(data.itinerary)
  );
}
