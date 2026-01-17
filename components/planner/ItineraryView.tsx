"use client";

import {
  CalendarDays,
  Plane,
  Hotel,
  Map,
  Utensils,
  Star,
  FileDown,
  Heart,
  Wand2,
  Edit3,
} from "lucide-react";
import Image from "next/image";

export default function ItineraryView({
  trip,
  loading,
}: {
  trip: any | null;
  loading: boolean;
})


 {
  if (loading) {
    return (
      <section className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground text-lg">
          Generating your itinerary...
        </p>
      </section>
    );
  }
    if (!trip) {
    return (
      <section className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground text-lg">
          Fill the form to generate your trip ✨
        </p>
      </section>
    );
  }
  console.log("response in the itineraryvuew page", trip);

  return (
    <section className="flex-1 overflow-y-auto scrollbar-hide bg-background relative">
      {/* ================= HERO ================= */}
      <HeroHeader trip={trip} />

      {/* ================= CONTENT ================= */}
      <div className="px-6 md:px-12 py-8 max-w-5xl mx-auto space-y-12 pb-24">
        {/* Budget */}
        <BudgetBreakdown cost={trip.cost_estimate} />

        {/* Timeline */}
        <ItineraryTimeline itinerary={trip.itinerary} />

        {/* Recommended Stays */}
        <RecommendedStays stays={trip.recommended_stays} />
      </div>

      {/* Floating Action Bar */}
      <FloatingActions />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* HERO */
/* ------------------------------------------------------------------ */

function HeroHeader({ trip }: { trip: any }) {
  const heroImage =
    trip.itinerary?.[0]?.activities?.[0]?.images?.[0] ??
    "/images/placeholder.jpg";

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

      <Image
        src={heroImage}
        alt={trip.meta.destination}
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute bottom-6 left-8 md:left-12 z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-white text-xs font-bold mb-3">
          <CalendarDays className="w-4 h-4" />
          {trip.meta.total_days} Days
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-1">
          {trip.meta.destination}
        </h1>

        <p className="text-muted-foreground font-medium">
          {trip.meta.trip_type} Trip • {trip.meta.travelers}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* BUDGET */
/* ------------------------------------------------------------------ */

function BudgetBreakdown({ cost }: { cost: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-4 flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-foreground">
          Estimated Cost Breakdown
        </h3>
        <span className="text-primary font-bold text-xl">
          ${cost.total_estimated}
          <span className="text-sm font-normal text-muted-foreground">
            {" "}
            total
          </span>
        </span>
      </div>

      <BudgetCard title="Flights" amount={cost.breakdown.flights} icon={<Plane />} />
      <BudgetCard title="Accommodation" amount={cost.breakdown.accommodation} icon={<Hotel />} />
      <BudgetCard title="Activities" amount={cost.breakdown.activities} icon={<Map />} />
      <BudgetCard title="Food & Misc" amount={cost.breakdown.food_misc} icon={<Utensils />} />
    </div>
  );
}

function BudgetCard({
  title,
  amount,
  icon,
}: {
  title: string;
  amount: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-card p-4 rounded-xl border border-border space-y-2">
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>{title}</span>
        {icon}
      </div>
      <p className="text-xl font-bold text-foreground">${amount}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TIMELINE */
/* ------------------------------------------------------------------ */

function ItineraryTimeline({ itinerary }: { itinerary: any[] }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-foreground mb-6">
        Your Itinerary
      </h3>

      {itinerary.map((day, idx) => (
        <DaySection
          key={day.day}
          title={`Day ${day.day}: ${day.title}`}
          active={idx === 0}
          activities={day.activities}
        />
      ))}
    </div>
  );
}

function DaySection({
  title,
  activities,
  active,
}: {
  title: string;
  activities: any[];
  active?: boolean;
}) {
  return (
    <div className="relative pl-8 md:pl-10 border-l-2 border-border space-y-6">
      <div
        className={`absolute -left-[9px] top-0 size-[18px] rounded-full ${
          active ? "bg-primary" : "bg-muted-foreground"
        } ring-4 ring-background`}
      />

      <h4 className="text-xl font-bold text-foreground">{title}</h4>

      <div className="space-y-4">
        {activities.map((a, i) => (
          <ActivityCard key={i} activity={a} />
        ))}
      </div>
    </div>
  );
}

function ActivityCard({ activity }: { activity: any }) {
  const image = activity.images?.[0];

  return (
    <div className="group relative flex flex-col md:flex-row gap-4 p-4 rounded-2xl bg-card border border-border">
      {image && (
        <div
          className="w-full md:w-32 h-32 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}

      <div className="flex-1">
        <span className="text-[10px] font-bold uppercase text-primary">
          {activity.time_of_day} • {activity.duration_hours} hrs
        </span>

        <h5 className="text-lg font-bold text-foreground mt-1">
          {activity.name}
        </h5>

        <p className="text-sm text-muted-foreground mt-1">
          {activity.description}
        </p>

        <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
          <span>• {activity.entry_type}</span>
          <span>• {activity.intensity}</span>
        </div>
      </div>

      <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary">
        <Edit3 className="w-4 h-4" />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* STAYS */
/* ------------------------------------------------------------------ */

function RecommendedStays({ stays }: { stays: any[] }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-foreground mb-6">
        Recommended Stays
      </h3>

      <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x">
        {stays.map((stay, i) => (
          <HotelCard key={i} stay={stay} />
        ))}
      </div>
    </div>
  );
}



function HotelCard({ stay }: { stay: any }) {
  return (
    <div className="min-w-[280px] w-[300px] snap-center rounded-2xl bg-card border border-border overflow-hidden">
      <div className="relative h-40 bg-muted flex items-center justify-center text-sm text-muted-foreground">
        Hotel Image
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h5 className="font-bold text-foreground">{stay.area}</h5>
          <span className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
            <Star className="w-4 h-4 fill-current" />
            {stay.rating_expectation}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-foreground">
            ${stay.price_range_per_night.min}
            <span className="text-xs text-muted-foreground"> /night</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FLOATING ACTIONS */
/* ------------------------------------------------------------------ */

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 md:right-12 flex gap-3 z-50">
      <ActionBtn icon={<FileDown />} label="Download PDF" />
      <ActionBtn icon={<Heart />} label="Save Trip" />
      <ActionBtn icon={<Wand2 />} label="Modify with AI" primary />
    </div>
  );
}

function ActionBtn({
  icon,
  label,
  primary,
}: {
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
}) {
  return (
    <button
      className={`
        px-5 py-3 rounded-3xl font-bold text-sm flex items-center gap-2
        backdrop-blur-md shadow-xl transition-all text-foreground
        ${
          primary
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-card border border-border hover:bg-muted"
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
}
