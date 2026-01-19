// components/chat/ChatWelcome.tsx
"use client"

import { Hand } from "lucide-react"

function getGreeting() {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) return "Good morning"
  if (hour >= 12 && hour < 17) return "Good afternoon"
  if (hour >= 17 && hour < 22) return "Good evening"
  return "Hello"
}

export default function ChatWelcome({ username }: { username: string }) {
  const greeting = getGreeting()

  return (
    <div className="flex flex-col items-center text-center gap-4 py-8">
      <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm">
        <Hand className="w-8 h-8" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {greeting}, {username}.
      </h1>

      <p className="text-muted-foreground text-base max-w-lg">
        Ready for an adventure? I can help you explore destinations, plan trips,
        or just get inspired.
      </p>
    </div>
  )
}
