import { NextResponse } from "next/server";
import { GroqProvider } from "@/lib/ai/GroqProvider";

import { detectChatIntent } from "@/lib/chat/intent";
import { buildChatStrategy } from "@/lib/chat/strategy";
import { normalizeChatResponse } from "@/lib/chat/normalizer";
import { extractContext } from "@/lib/chat/context";

const CHAT_SYSTEM_PROMPT = `
You are a friendly, conversational travel assistant.

Rules:
- Respond naturally like a human.
- Do NOT output JSON.
- Do NOT mention schemas or formatting.
- If the user is vague, ask gentle clarifying questions.
- Do not force itineraries unless the user asks.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Safety check
    if (!Array.isArray(messages)) {
      return NextResponse.json({
        blocks: [
          {
            type: "text",
            content: "How can I help you plan your next trip?",
          },
        ],
      });
    }

    // Get latest user message
    const latestUserMessage = messages
      .filter((m: any) => m.role === "user")
      .slice(-1)[0];

    if (!latestUserMessage) {
      return NextResponse.json({
        blocks: [
          {
            type: "text",
            content: "How can I help you plan your next trip?",
          },
        ],
      });
    }

    // 1️⃣ Extract recent context (sliding window)
    const recentContext = extractContext(messages);

    // 2️⃣ Detect intent
    const intent = detectChatIntent(
      latestUserMessage.blocks?.[0]?.content ?? "",
      recentContext,
    );

    // 3️⃣ Build response strategy
    const strategy = buildChatStrategy(intent);

    // 4️⃣ Call Groq via your existing provider ✅
    const groq = new GroqProvider();

    const rawText = await groq.chatCompletion([
      { role: "system", content: CHAT_SYSTEM_PROMPT },
      ...recentContext.map((c) => ({
        role: "user",
        content: c,
      })),
      {
        role: "user",
        content: latestUserMessage.blocks?.[0]?.content ?? "",
      },
    ]);

    // 5️⃣ Normalize AI response → UI-safe blocks
    const blocks = normalizeChatResponse(rawText, strategy);

    return NextResponse.json({ blocks });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json({
      blocks: [
        {
          type: "text",
          content: "Sorry, something went wrong. Please try again in a moment.",
        },
      ],
    });
  }
}
