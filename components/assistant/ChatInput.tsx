import { PlusCircle, Mic, Send } from "lucide-react"

export default function ChatInput() {
  return (
    <div className="p-4 border-t border-border">
      <div className="max-w-4xl mx-auto flex items-center gap-2 bg-card rounded-full p-2 border border-border shadow-sm">
        <IconButton><PlusCircle /></IconButton>
        <input
          className="text-foreground flex-1 bg-transparent outline-none text-sm"
          placeholder="Where do you want to go next?"
        />
        <IconButton><Mic /></IconButton>
        <button className="bg-primary text-white p-3 rounded-full">
          <Send size={18} />
        </button>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-2">
        AI can make mistakes. Verify important details.
      </p>
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
