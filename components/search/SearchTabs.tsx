"use client"

import { BedDouble, Plane, Car } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { label: "Stays", icon: BedDouble, active: true },
  { label: "Flights", icon: Plane },
  { label: "Cars", icon: Car },
]

export default function SearchTabs() {
  return (
    <div className="flex gap-2 p-2 border-b border-border/60 mb-2">
      {tabs.map(({ label, icon: Icon, active }) => (
        <button
          key={label}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors",
            active
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          <Icon size={18} />
          {label}
        </button>
      ))}
    </div>
  )
}
