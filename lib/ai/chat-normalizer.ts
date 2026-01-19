import { ChatBlock } from "@/types/chat"

export function normalizeChatResponse(text: string): ChatBlock[] {
  const blocks: ChatBlock[] = []

  // Always add main text
  blocks.push({
    type: "text",
    content: text.trim(),
  })

  // Soft suggestions (very safe heuristic)
  if (text.includes("?")) {
    blocks.push({
      type: "suggestions",
      options: [
        "Suggest destinations",
        "Plan a short itinerary",
        "Budget-friendly options",
      ],
    })
  }

  return blocks
}
