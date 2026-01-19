// lib/chat/planner-cta.ts

import { PlannerCTAType } from "./strategy"

export function getPlannerCTAText(type: PlannerCTAType): string | null {
  if (type === "soft") {
    return "Want me to organize this into a day-by-day itinerary?"
  }

  if (type === "strong") {
    return "I can generate a complete itinerary with daily plans, stays, and costs. Want to proceed?"
  }

  return null
}
