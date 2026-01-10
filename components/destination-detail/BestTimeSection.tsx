import { Calendar, ThumbsUp } from "lucide-react"

export default function BestTimeSection() {
  return (
    <section
      id="weather"
      className="bg-card border border-border rounded-3xl p-6 md:p-8"
    >
      <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
        <Calendar className="text-primary" />
        Best Time to Visit
      </h3>

      <div className="space-y-6">
        {/* Recommendation */}
        <div className="p-4 rounded-3xl bg-primary/10 border border-primary/20 flex gap-4 items-start">
          <ThumbsUp className="text-primary mt-1" size={20} />
          <div>
            <p className="font-bold text-lg text-foreground">
              Peak Season: March – May
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Cherry Blossom (Sakura) season with mild, pleasant weather —
              perfect for outdoor exploration.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="flex justify-between text-xs text-muted-foreground font-mono mb-2 uppercase tracking-wide">
            {["J","F","M","A","M","J","J","A","S","O","N","D"].map(m => (
              <span key={m}>{m}</span>
            ))}
          </div>

          <div className="h-4 w-full bg-muted rounded-3xl overflow-hidden flex">
            <div className="w-[16.6%] bg-muted-foreground/30" />
            <div className="w-[25%] bg-primary" />
            <div className="w-[16.6%] bg-muted-foreground/30" />
            <div className="w-[16.6%] bg-orange-400" />
            <div className="w-[16.6%] bg-primary/70" />
            <div className="w-[8.3%] bg-muted-foreground/30" />
          </div>

          <div className="flex gap-4 mt-3 text-xs font-medium text-muted-foreground">
            <Legend color="bg-primary" label="Peak" />
            <Legend color="bg-orange-400" label="Hot" />
            <Legend color="bg-muted-foreground/30" label="Off-peak" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <div className={`size-2 rounded-3xl ${color}`} />
      {label}
    </div>
  )
}
