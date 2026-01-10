"use client"

import {
  CalendarDays,
  Trash2,
  GripVertical,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ItineraryPanel() {
  return (
    <div className="flex h-full w-full flex-col bg-card">

      {/* Header */}
      <div className="p-5 border-b border-border flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">
          Draft Itinerary
        </h3>
        <button className="text-sm font-medium text-primary hover:underline">
          Clear all
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-8 scrollbar-hide">

        {/* DAY 1 */}
        <DaySection
          day="Day 1"
          date="Sat, 12 Oct"
          items={[
            {
              title: "Arrival at Udaipur",
              time: "10:00 AM",
              description: "Check-in at Zostel",
              active: true,
            },
            {
              title: "Lake Pichola Ride",
              cost: "₹400 approx",
            },
          ]}
        />

        {/* DAY 2 */}
        <DaySection
          day="Day 2"
          date="Sun, 13 Oct"
          empty
        />

        {/* Budget Summary */}
        <BudgetSummary />

      </div>

      {/* Footer CTA */}
      <div className="p-6 border-t border-border">
        <Button className="w-full h-12 rounded-3xl font-semibold gap-2">
          <CalendarDays className="w-5 h-5" />
          Convert to Itinerary
        </Button>
      </div>
    </div>
  )
}

function DaySection({
  day,
  date,
  items,
  empty,
}: {
  day: string
  date: string
  items?: {
    title: string
    time?: string
    description?: string
    cost?: string
    active?: boolean
  }[]
  empty?: boolean
}) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 rounded-lg bg-muted text-foreground text-xs font-bold uppercase">
          {day}
        </span>
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground font-medium">
          {date}
        </span>
      </div>

      {/* Timeline */}
      <div className="relative ml-2 pl-4 border-l-2 border-dashed border-border space-y-3">
        {empty ? (
          <div className="py-4 text-center text-xs text-muted-foreground border-2 border-dashed rounded-xl bg-muted/40">
            Drag items from chat here
          </div>
        ) : (
          items?.map((item, i) => (
            <TimelineItem key={i} {...item} />
          ))
        )}
      </div>
    </div>
  )
}

function TimelineItem({
  title,
  time,
  description,
  cost,
  active,
}: {
  title: string
  time?: string
  description?: string
  cost?: string
  active?: boolean
}) {
  return (
    <div className="relative bg-card p-4 rounded-xl border border-border shadow-sm hover:border-primary/30 transition-colors group">

      {/* Timeline dot */}
      <span
        className={`
          absolute -left-[22px] top-5 size-3.5 rounded-full border-2
          ${active
            ? "bg-primary border-background"
            : "bg-background border-border"}
        `}
      />

      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-foreground truncate">
            {title}
          </h4>
          {description && (
            <p className="text-xs text-muted-foreground mt-0.5">
              {description}
            </p>
          )}
        </div>

        {time && (
          <span className="text-[10px] bg-muted px-2 py-0.5 rounded font-medium">
            {time}
          </span>
        )}
      </div>

      {cost && (
        <p className="text-xs text-muted-foreground mt-2">
          {cost}
        </p>
      )}

      {/* Drag handle (future use) */}
      <GripVertical className="absolute right-3 top-4 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}

function BudgetSummary() {
  return (
    <div className="mt-6 rounded-xl bg-muted text-white p-4 space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Estimated Cost</span>
        <span className="font-bold">₹8,500</span>
      </div>

      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full w-[85%] bg-green-400" />
      </div>

      <div className="flex justify-between text-[10px] text-gray-400">
        <span>₹8.5k used</span>
        <span>₹10k budget</span>
      </div>
    </div>
  )
}
