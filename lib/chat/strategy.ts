// lib/chat/strategy.ts

import { ChatIntent } from "./intent"

export type PlannerCTAType = "none" | "soft" | "strong"

export interface ChatResponseStrategy {
  intent: ChatIntent

  allowCards: boolean
  maxCards: number

  showSuggestions: boolean

  plannerCTA: PlannerCTAType
}

export function buildChatStrategy(
  intent: ChatIntent
): ChatResponseStrategy {
  switch (intent) {
    case "explore":
      return {
        intent,
        allowCards: true,
        maxCards: 3,
        showSuggestions: true,
        plannerCTA: "none",
      }

    case "info":
      return {
        intent,
        allowCards: false,
        maxCards: 0,
        showSuggestions: false,
        plannerCTA: "none",
      }

    case "plan_soft":
      return {
        intent,
        allowCards: true,
        maxCards: 4,
        showSuggestions: true,
        plannerCTA: "soft",
      }

    case "plan_strong":
      return {
        intent,
        allowCards: true,
        maxCards: 4,
        showSuggestions: true,
        plannerCTA: "strong",
      }

    default:
      return {
        intent: "explore",
        allowCards: true,
        maxCards: 3,
        showSuggestions: true,
        plannerCTA: "none",
      }
  }
}
