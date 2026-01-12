import { Globe, PlaneTakeoff, Star } from "lucide-react"

export default function ProfileStats() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Stat icon={Globe} label="Countries Visited" value="12" />
      <Stat icon={PlaneTakeoff} label="Total Trips" value="8" />
      <Stat icon={Star} label="Reviews Written" value="24" />
    </section>
  )
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: any
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:shadow-md transition-shadow">
      <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        <Icon size={22} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  )
}
