import Image from "next/image"
import { Map, Landmark, Utensils } from "lucide-react"

export default function MapSidebar() {
  return (
    <section
      id="map"
      className="bg-card border border-border rounded-2xl overflow-hidden "
    >
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-bold text-lg text-foreground">Explore Map</h3>
        <button className="text-primary text-sm font-semibold hover:underline">
          View Fullscreen
        </button>
      </div>

      {/* Map */}
      <div className="relative h-[350px] w-full bg-muted group">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzBbrFusAfWQT9xx8fgCFcB1W6d-34Y5H70T4FpYmmXl6lIkGRP5ipT1E9aJimrAn66F_DHwn1IaYgNpYJWoLw1cGkDRVLQ2A2hVZpq14Xtx1bwnUrpgYpFH6uX05Yj944AFsXZAdIh9L65XqlUamRO1rsdFiZw6xQJ-OEfVvT6r_16xzRbfYIiHXga9KCoPXvLuj25ain8dOqqcf1ygeCWxn2OvPr5kCMxgIRCEJnPM_KZzttoyryBcf_H4mLPNcr8hgouimj-Aw"
          alt="Map of Kyoto"
          fill
          className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
          unoptimized
        />

        {/* Center CTA */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-background text-foreground px-6 py-3 rounded-full shadow-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            <Map className="text-primary" size={18} />
            Interactive Map
          </button>
        </div>

        {/* Mock Pins */}
        <Pin
          className="top-1/3 left-1/4 animate-bounce"
          icon={<Landmark size={14} />}
        />
        <Pin
          className="bottom-1/3 right-1/3"
          icon={<Utensils size={14} />}
        />
      </div>

      {/* Saved locations */}
      <div className="p-4 bg-muted/40">
        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3">
          Saved Locations
        </p>

        <ul className="space-y-3">
          <SavedItem label="Fushimi Inari Shrine" type="Sight" />
          <SavedItem label="Kinkaku-ji" type="Sight" />
          <SavedItem label="Nishiki Market" type="Food" color="bg-orange-400" />
        </ul>
      </div>
    </section>
  )
}

/* ---------- Helpers ---------- */

function Pin({
  className,
  icon,
}: {
  className: string
  icon: React.ReactNode
}) {
  return (
    <div
      className={`absolute size-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg border-2 border-background ${className}`}
    >
      {icon}
    </div>
  )
}

function SavedItem({
  label,
  type,
  color = "bg-primary",
}: {
  label: string
  type: string
  color?: string
}) {
  return (
    <li className="flex items-center gap-3 text-sm text-foreground">
      <div className={`size-2 rounded-full ${color}`} />
      {label}
      <span className="ml-auto text-xs text-muted-foreground">{type}</span>
    </li>
  )
}
