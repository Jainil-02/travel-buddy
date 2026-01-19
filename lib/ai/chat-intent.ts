// lib/chat-intent.ts

export type ChatIntent =
  | "explore"      // inspiration, vague, discovery
  | "info"         // questions, advice, facts
  | "plan_soft"    // light planning
  | "plan_strong"  // explicit itinerary request
