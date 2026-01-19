// lib/chat/intent.ts

export type ChatIntent =
  | "explore"
  | "info"
  | "plan_soft"
  | "plan_strong"

// --- keyword sets ---
const PLAN_STRONG_KEYWORDS = [
  "full plan",
  "complete plan",
  "detailed plan",
  "itinerary",
  "day by day",
  "day-wise",
  "schedule my trip",
]

const PLAN_SOFT_KEYWORDS = [
  "plan",
  "trip",
  "travel",
  "days",
  "budget",
  "weekend",
  "vacation",
]

const INFO_KEYWORDS = [
  "is",
  "are",
  "best time",
  "safe",
  "good for",
  "weather",
  "cost of",
  "how expensive",
]

const EXPLORE_KEYWORDS = [
  "where should",
  "suggest",
  "ideas",
  "places",
  "recommend",
]

function normalize(text: string) {
  return text.toLowerCase().trim()
}

// --- main function ---
export function detectChatIntent(
  latestMessage: string,
  recentMessages: string[] = []
): ChatIntent {
  const text = normalize(latestMessage)
  const contextText = normalize(recentMessages.join(" "))

  // 1️⃣ Strong planning intent (highest priority)
  if (
    PLAN_STRONG_KEYWORDS.some((k) => text.includes(k))
  ) {
    return "plan_strong"
  }

  // 2️⃣ Soft planning intent
  if (
    PLAN_SOFT_KEYWORDS.some((k) => text.includes(k)) ||
    PLAN_SOFT_KEYWORDS.some((k) => contextText.includes(k))
  ) {
    return "plan_soft"
  }

  // 3️⃣ Information intent
  if (
    INFO_KEYWORDS.some((k) => text.includes(k))
  ) {
    return "info"
  }

  // 4️⃣ Exploration / inspiration
  if (
    EXPLORE_KEYWORDS.some((k) => text.includes(k))
  ) {
    return "explore"
  }

  // 5️⃣ Default fallback (very important)
  return "explore"
}

