"use client"

import { useState } from "react"
import { PlusCircle, Mic, Send } from "lucide-react"

export default function ChatInput({
  onSend,
}: {
  onSend: (text: string) => void
}) {
  const [value, setValue] = useState("")

  function handleSend() {
    if (!value.trim()) return
    onSend(value)
    setValue("")
  }

  return (
    <div className="px-4 py-5 border-t border-border">
      <div className="max-w-4xl mx-auto flex items-center gap-2 bg-card rounded-full p-1 border border-border shadow-sm">
        <IconButton>
          <PlusCircle />
        </IconButton>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="text-foreground flex-1 bg-transparent outline-none text-sm"
          placeholder="Where do you want to go next?"
        />

        <IconButton>
          <Mic />
        </IconButton>

        <button
          onClick={handleSend}
          className="bg-primary text-white p-3 rounded-full"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  )
}

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="p-3 rounded-full hover:bg-muted text-muted-foreground">
      {children}
    </button>
  )
}
