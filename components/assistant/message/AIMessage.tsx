"use client"

import { Bot } from "lucide-react"

type AIMessageProps = {
  title?: string
  text: string
}

export function AIMessage({ title, text }: AIMessageProps) {
  return (
    <div className="flex items-start gap-4 w-full">
      
      {/* AI Avatar */}
      <div
        className="
          size-10 shrink-0 rounded-full
          bg-primary text-primary-foreground
          flex items-center justify-center
          shadow-lg shadow-primary/20
          mt-1
        "
      >
        <Bot className="w-5 h-5" />
      </div>

      {/* Message Bubble */}
      <div
        className="
          max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]
          bg-card border border-border
          px-5 py-4 rounded-3xl rounded-tl-none
          shadow-card
          space-y-2
        "
      >
        {title && (
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            {title}
          </h4>
        )}

        <p className="text-sm leading-relaxed text-muted-foreground">
          {text}
        </p>
      </div>
    </div>
  )
}
