// components/chat/ThinkingIndicator.tsx
"use client"

export default function ThinkingIndicator() {
  return (
    <div className="flex items-center gap-2 text-muted-foreground text-sm px-2">
      <span className="inline-flex gap-1">
        <Dot />
        <Dot delay="delay-150" />
        <Dot delay="delay-300" />
      </span>
      Thinking…
    </div>
  )
}

function Dot({ delay = "" }: { delay?: string }) {
  return (
    <span
      className={`w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce ${delay}`}
    />
  )
}
