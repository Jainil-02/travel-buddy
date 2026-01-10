import { Sparkles } from "lucide-react"

export default function AiInsightBanner() {
  return (
    <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/30 p-4 rounded-xl flex items-start gap-3">
      <div className="bg-primary/20 p-2 rounded-full text-primary">
        <Sparkles size={18} />
      </div>

      <div>
        <h3 className="font-bold text-sm mb-1">AI Travel Tip</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Booking your stay in{" "}
          <span className="text-foreground font-medium">Shinjuku</span> could save
          you an average of{" "}
          <span className="text-green-400 font-bold">$45/night</span> compared to
          Shibuya for these dates.
        </p>
      </div>
    </div>
  )
}
