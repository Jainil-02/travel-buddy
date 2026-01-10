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

export default function ItineraryView() {
  return (
    <section className="flex-1 overflow-y-auto scrollbar-hide bg-background relative">
      {/* ================= HERO ================= */}
      <HeroHeader />

      {/* ================= CONTENT ================= */}
      <div className="px-6 md:px-12 py-8 max-w-5xl mx-auto space-y-12 pb-24">
        {/* Budget */}
        <BudgetBreakdown />

        {/* Timeline */}
        <ItineraryTimeline />

        {/* Recommended Stays */}
        <RecommendedStays />
      </div>

      {/* Floating Action Bar */}
      {/* <FloatingActions /> */}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* HERO */
/* ------------------------------------------------------------------ */

function HeroHeader() {
  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

      {/* IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/Kyoto.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute bottom-6 left-8 md:left-12 z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-white text-xs font-bold mb-3">
          <CalendarDays className="w-4 h-4" />5 Days • Sep 15 – 20
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-1">
          Kyoto, Japan
        </h1>
        <p className="text-muted-foreground font-medium">
          Culture & Food Trip • Couple
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* BUDGET */
/* ------------------------------------------------------------------ */

function BudgetBreakdown() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-4 flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-foreground">
          Estimated Cost Breakdown
        </h3>
        <span className="text-primary font-bold text-xl">
          $2,450{" "}
          <span className="text-sm font-normal text-muted-foreground">
            total
          </span>
        </span>
      </div>

      <BudgetCard title="Flights" amount="$950" percent={40} icon={<Plane />} />
      <BudgetCard
        title="Accommodation"
        amount="$1,050"
        percent={45}
        icon={<Hotel />}
      />
      <BudgetCard
        title="Activities"
        amount="$250"
        percent={10}
        icon={<Map />}
      />
      <BudgetCard
        title="Food & Misc"
        amount="$200"
        percent={5}
        icon={<Utensils />}
      />
    </div>
  );
}

function BudgetCard({
  title,
  amount,
  percent,
  icon,
}: {
  title: string;
  amount: string;
  percent: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-card p-4 rounded-xl border border-border space-y-2">
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>{title}</span>
        {icon}
      </div>
      <p className="text-xl font-bold text-foreground">{amount}</p>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TIMELINE */
/* ------------------------------------------------------------------ */

function ItineraryTimeline() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-foreground">Your Itinerary</h3>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-foreground rounded-lg bg-muted hover:bg-muted/70">
          <Map className="w-4 h-4" />
          Map View
        </button>
      </div>

      {/* Day 1 */}
      <DaySection
        active
        title="Day 1: Arrival & Southern Higashiyama"
        date="Sep 15, Friday"
        activities={[
          {
            time: "Morning • 09:00 AM",
            title: "Fushimi Inari Taisha",
            desc: "Famous for its thousands of vermilion torii gates.",
            meta: ["Free Entry", "Moderate Walk"],
            image: "/images/Fushimi.png",
          },
        ]}
      />

      {/* Day 2 */}
      <DaySection
        title="Day 2: Northern Kyoto & Zen Temples"
        date="Sep 16, Saturday"
        empty
      />
    </div>
  );
}

function DaySection({
  title,
  date,
  activities,
  active,
  empty,
}: {
  title: string;
  date: string;
  activities?: any[];
  active?: boolean;
  empty?: boolean;
}) {
  return (
    <div className="relative pl-8 md:pl-10 border-l-2 border-border space-y-6">
      <div
        className={`
          absolute -left-[9px] top-0 size-[18px] rounded-full
          ${active ? "bg-primary" : "bg-muted-foreground"}
          ring-4 ring-background
        `}
      />

      <div>
        <h4 className="text-xl font-bold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground mb-6">{date}</p>

        {empty ? (
          <div className="border border-dashed border-border bg-muted p-6 rounded-xl text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Activities for this day loaded...
            </p>
            <button className="text-primary text-sm font-bold hover:underline">
              View Full Itinerary
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {activities?.map((a, i) => (
              <ActivityCard key={i} {...a} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ActivityCard({ title, desc, time, meta, image }: any) {
  return (
    <div className="group relative flex flex-col md:flex-row gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 shadow-sm">
      <div
        className="w-full md:w-32 h-32 rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />

      <div className="flex-1">
        <span className="text-[10px] font-bold uppercase text-primary">
          {time}
        </span>
        <h5 className="text-lg font-bold text-foreground mt-1">{title}</h5>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {desc}
        </p>

        <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
          {meta?.map((m: string) => (
            <span key={m}>• {m}</span>
          ))}
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

function RecommendedStays() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-foreground mb-6">
        Recommended Stays
      </h3>

      <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x">
        <HotelCard image="/images/KyotoH1.png" name="The Thousand Kyoto" price="$280" rating="4.9" />
        <HotelCard image="/images/KyotoH2.png" name="Ryokan Sanga" price="$150" rating="4.7" />
        <HotelCard image="/images/KyotoH3.png" name="Ace Hotel Kyoto" price="$210" rating="4.8" />
      </div>
    </div>
  );
}

function HotelCard({ image, name, price, rating }: any) {
  return (
    <div className="min-w-[280px] w-[300px] snap-center rounded-2xl bg-card border border-border overflow-hidden group">
      <div className="relative h-40 overflow-hidden">
        <Image
          src={image} // "/hotels/kyoto.jpg"
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>{" "}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h5 className="font-bold text-foreground">{name}</h5>
          <span className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
            <Star className="w-4 h-4 fill-current" /> {rating}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-foreground">
            {price}
            <span className="text-xs text-muted-foreground"> /night</span>
          </span>
          <button className="px-3 py-1.5 rounded-3xl bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-primary-foreground">
            Book Now
          </button>
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
