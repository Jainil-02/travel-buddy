// types/ai-itinerary.schema.ts
import { z } from "zod"

/* =========================
   ENUMS
========================= */

export const TravelersEnum = z.enum([
  "Solo",
  "Couple",
  "Family",
  "Friends",
])

export const PaceEnum = z.enum([
  "Relaxed",
  "Moderate",
  "Fast",
])

export const TimeOfDayEnum = z.enum([
  "morning",
  "afternoon",
  "evening",
  "night",
])

export const EntryTypeEnum = z.enum([
  "free",
  "paid",
])

export const IntensityEnum = z.enum([
  "relaxed",
  "light_walk",
  "moderate_walk",
  "active",
])

export const ActivityCategoryEnum = z.enum([
  "temple",
  "shrine",
  "food_market",
  "restaurant",
  "neighborhood",
  "museum",
  "nature",
  "shopping",
  "experience",
])

export const StayTypeEnum = z.enum([
  "Boutique Hotel",
  "Modern Hotel",
  "Luxury Hotel",
  "Budget Hotel",
])

/* =========================
   ACTIVITY
========================= */

export const AIActivitySchema = z.object({
  name: z.string().min(1),
  category: ActivityCategoryEnum,
  time_of_day: TimeOfDayEnum,
  duration_hours: z.number().positive(),
  description: z.string().min(10),
  entry_type: EntryTypeEnum,
  intensity: IntensityEnum,
})

/* =========================
   DAY
========================= */

export const AIDaySchema = z.object({
  day: z.number().int().positive(),
  title: z.string().min(3),
  theme: z.string().min(3),
  activities: z.array(AIActivitySchema).min(1),
})

/* =========================
   COST ESTIMATE
========================= */

export const AICostEstimateSchema = z.object({
  currency: z.string().length(3),
  breakdown: z.object({
    flights: z.number().nonnegative(),
    accommodation: z.number().nonnegative(),
    activities: z.number().nonnegative(),
    food_misc: z.number().nonnegative(),
  }),
  total_estimated: z.number().nonnegative(),
  note: z.string().optional(),
})

/* =========================
   META & SUMMARY
========================= */

export const AIMetaSchema = z.object({
  destination: z.string().min(2),
  trip_type: z.string().min(3),
  travelers: TravelersEnum,
  pace: PaceEnum,
  total_days: z.number().int().positive(),
})

export const AISummarySchema = z.object({
  overview: z.string().min(20),
})

/* =========================
   RECOMMENDED STAYS
========================= */

export const AIRecommendedStaySchema = z.object({
  area: z.string().min(2),
  stay_type: StayTypeEnum,
  price_range_per_night: z.object({
    min: z.number().nonnegative(),
    max: z.number().positive(),
  }),
  rating_expectation: z.number().min(1).max(5),
  why_recommended: z.string().min(10),
})

/* =========================
   ROOT SCHEMA
========================= */

export const AIItinerarySchema = z.object({
  meta: AIMetaSchema,
  summary: AISummarySchema,
  cost_estimate: AICostEstimateSchema,
  itinerary: z.array(AIDaySchema).min(1),
  recommended_stays: z.array(AIRecommendedStaySchema).min(1),
})
