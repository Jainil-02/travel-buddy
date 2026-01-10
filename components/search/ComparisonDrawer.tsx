import { ChevronUp } from "lucide-react"

export default function ComparisonDrawer() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-card border-t border-border p-3 z-30 translate-y-[85%] hover:translate-y-0 transition-transform">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center mb-4 cursor-pointer">
          <span className="font-bold text-sm">2 Items in Comparison</span>
          <ChevronUp className="text-muted-foreground" />
        </div>
      </div>
    </div>
  )
}
