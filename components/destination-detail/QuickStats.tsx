import { Thermometer, Coins, Languages } from "lucide-react"

export default function QuickStats() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        icon={<Thermometer className="text-primary" />}
        label="Current Weather"
        value="18°C · Sunny"
      />
      <StatCard
        icon={<Coins className="text-primary" />}
        label="Currency"
        value="JPY (¥)"
      />
      <StatCard
        icon={<Languages className="text-primary" />}
        label="Language"
        value="Japanese"
      />
    </section>
  )
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4">
      <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-xl font-bold text-foreground">{value}</p>
      </div>
    </div>
  )
}
