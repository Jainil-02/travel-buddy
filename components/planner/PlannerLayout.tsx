"use client"

import { useState } from "react"
import { SlidersHorizontal } from "lucide-react"

import PlannerForm from "./PlannerForm"
import ItineraryView from "./ItineraryView"
import FullScreenDrawer from "./FullScreenDrawer"

export default function PlannerLayout() {
  const [openForm, setOpenForm] = useState(false)

  return (
    <div className="relative flex h-[calc(100vh-64px)] bg-background overflow-hidden">

      {/* LEFT – FORM (≥1024px) */}
      <aside
        className="
          hidden lg:flex
          w-[400px] xl:w-[480px]
          border-r border-border
          bg-card
          overflow-y-auto
          scrollbar-hide
        "
      >
        <PlannerForm />
      </aside>

      {/* RIGHT – ITINERARY */}
      <main className="flex-1 overflow-y-auto scrollbar-hide relative">
        <ItineraryView />

        {/* Mobile / Tablet Button */}
        <button
          onClick={() => setOpenForm(true)}
          className="
            lg:hidden
            fixed bottom-6 left-6 z-40
            flex items-center gap-2
            px-4 py-3 rounded-xl
            bg-primary text-primary-foreground
            shadow-xl shadow-primary/30
            hover:bg-primary/90
            active:scale-95
          "
        >
          <SlidersHorizontal className="w-5 h-5" />
          Plan Trip
        </button>
      </main>

      {/* FULL SCREEN DRAWER */}
      {openForm && (
        <FullScreenDrawer
          title="Plan your trip"
          onClose={() => setOpenForm(false)}
        >
          <PlannerForm />
        </FullScreenDrawer>
      )}
    </div>
  )
}
