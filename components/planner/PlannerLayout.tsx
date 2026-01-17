"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import PlannerForm from "./PlannerForm";
import ItineraryView from "./ItineraryView";
import ItineraryEmptyState from "./ItineraryEmptyState";
import ItinerarySkeleton from "./ItinerarySkeletonState";
import FullScreenDrawer from "./FullScreenDrawer";
import { TripPlanResponse } from "@/types/trip";

export default function PlannerLayout() {
  const [openForm, setOpenForm] = useState(false);

  const [tripData, setTripData] = useState<TripPlanResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerateTrip(formData: any) {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/trips/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to generate itinerary");
      }

      const data: TripPlanResponse = await res.json();
      setTripData(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
      setOpenForm(false);
    }
  }

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
        <PlannerForm onSubmit={handleGenerateTrip} loading={loading} />
      </aside>

      {/* RIGHT – ITINERARY */}
      <main className="flex-1 overflow-y-auto scrollbar-hide relative">
        {/* 🔄 STATE PRIORITY ORDER (IMPORTANT) */}

        {loading && <ItinerarySkeleton />}

        {!loading && error && (
          <div className="mx-auto mt-12 max-w-xl rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive text-center">
            Failed to generate itinerary. Please try again.
          </div>
        )}

        {!loading && !tripData && !error && <ItineraryEmptyState />}

        {!loading && tripData && (
          <ItineraryView trip={tripData} />
        )}

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
          <PlannerForm onSubmit={handleGenerateTrip} loading={loading} />
        </FullScreenDrawer>
      )}
    </div>
  );
}
