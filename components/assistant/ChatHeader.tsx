import { Menu, Calendar } from "lucide-react"

export default function ChatHeader({
  onOpenSidebar,
  onOpenItinerary,
}: {
  onOpenSidebar: () => void
  onOpenItinerary: () => void
}) {
  return (
    <header className="h-14 px-4 flex items-center justify-between border-b border-border bg-background/90 backdrop-blur">

      {/* Left */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-muted text-foreground"
        onClick={onOpenSidebar}
      >
        <Menu className="w-5 h-5" />
      </button>

      <span className="text-foreground font-semibold text-sm">AI Travel Assistant</span>

      {/* Right */}
      <button
        className="xl:hidden p-2 rounded-lg hover:bg-muted text-foreground"
        onClick={onOpenItinerary}
      >
        <Calendar className="w-5 h-5" />
      </button>
    </header>
  )
}
