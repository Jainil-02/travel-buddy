// lib/chat/context.ts

export function extractContext(
  messages: any[],
  limit = 6
): string[] {
  return messages
    .filter((m) => m.role === "user")
    .slice(-limit)
    .map((m) =>
      m.blocks
        .filter((b: any) => b.type === "text")
        .map((b: any) => b.content)
        .join(" ")
    );
}
