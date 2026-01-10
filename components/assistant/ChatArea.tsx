"use client"

import { UserMessage } from "./message/UserMessage"
import { AIMessage } from "./message/AIMessage"
import { PlaceCard } from "./message/PlaceCard"
import {
  Euro,
  PiggyBank,
  Mountain,
  Heart,
  Hand,
} from "lucide-react"

export default function ChatArea() {
  return (
    <div
      className="flex-1 overflow-y-auto scroll-smooth scrollbar-hide
      px-4 md:px-6 lg:px-10 py-6 space-y-10"
    >

      {/* Welcome State */}
      <div className="flex flex-col items-center text-center gap-4 py-2">
        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm">
          <Hand className="w-8 h-8" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Good morning, Alex.
        </h1>

        <p className="text-muted-foreground text-base max-w-lg">
          Ready for an adventure? I can help you plan your next getaway.
        </p>
      </div>

      {/* Date Divider */}
      <div className="flex items-center justify-center gap-4 opacity-40">
        <div className="h-px w-12 bg-border" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
          Today
        </span>
        <div className="h-px w-12 bg-border" />
      </div>

      {/* User Message */}
      <UserMessage text="Plan a weekend trip in Udaipur under ₹10,000." />

      {/* AI Message */}
      <AIMessage
        title="That sounds lovely! 🇮🇳"
        text="I've found a great itinerary for you. Udaipur is beautiful this time of year.
        Based on your ₹10,000 budget, here are some tailored options that balance
        culture, views, and affordability."
      />

      {/* Place Cards */}
      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-5 min-w-max">

          <PlaceCard
            title="Lake Pichola View"
            location="Udaipur, Rajasthan"
            rating={4.8}
            price="Free Entry"
            tags={["Scenic", "Budget Friendly"]}
            image="/images/LakePichola.png"
          />

          <PlaceCard
            title="City Palace Tour"
            location="Old City, Udaipur"
            rating={4.6}
            price="₹300 / person"
            tags={["History", "Culture"]}
            image="/images/CityPalace.png"
          />

          <PlaceCard
            title="Zostel Udaipur"
            location="Hostel / Hotel"
            rating={4.5}
            price="₹1,200 / night"
            tags={["Stay", "Social"]}
            image="/images/Zostel.png"
          />

        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2">
        <QuickChip icon={<Euro />} label="Euro Summer" />
        <QuickChip icon={<PiggyBank />} label="Budget Friendly" />
        <QuickChip icon={<Mountain />} label="Adventure" />
        <QuickChip icon={<Heart />} label="Romantic Getaway" />
      </div>

      <div className="h-6" />
    </div>
  )
}

/* ---------- Small helper ---------- */

function QuickChip({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      className="
        px-4 py-2 rounded-full text-xs font-medium
        bg-card border border-border shadow-sm
        flex items-center gap-2
        text-muted-foreground
        hover:bg-muted hover:text-foreground
        transition-colors
      "
    >
      {icon}
      {label}
    </button>
  )
}
