import { ChatBlock } from "@/types/chat"
import { ChatResponseStrategy } from "./strategy"
import { getPlannerCTAText } from "./planner-cta"

export function normalizeChatResponse(
  text: string,
  strategy: ChatResponseStrategy
): ChatBlock[] {
  const blocks: ChatBlock[] = []

  // 1️⃣ Main text (always)
  blocks.push({
    type: "text",
    content: text.trim(),
  })

  // 2️⃣ Planner CTA (backend-controlled)
  const cta = getPlannerCTAText(strategy.plannerCTA)
  if (cta) {
    blocks.push({
      type: "text",
      content: cta,
    })
  }

  // 3️⃣ Suggestions (contextual)
  if (strategy.showSuggestions) {
    blocks.push({
      type: "suggestions",
      options: buildSuggestions(strategy.intent),
    })
  }

  return blocks
}

function buildSuggestions(intent: string): string[] {
  switch (intent) {
    case "explore":
      return [
        "Budget-friendly trips",
        "Trips from India",
        "Best time to visit",
      ]

    case "plan_soft":
      return [
        "Create a 3-day itinerary",
        "Suggest stays",
        "Things to do on Day 1",
      ]

    case "plan_strong":
      return [
        "Generate full itinerary",
        "Adjust budget",
        "Change travel pace",
      ]

    default:
      return []
  }
}
