"use client"

import {
  MapPin,
  Calendar,
  CalendarClock,
  User,
  Users,
  UsersRound,
  Sparkles,
  X,
} from "lucide-react"

export default function PlannerForm() {
  return (
    <aside
      className="
        w-full lg:w-[480px]
        shrink-0 border-r border-border
        bg-background
        overflow-y-auto
        scrollbar-hide
        z-10 flex flex-col
      "
    >
      <div className="p-6 pb-20 space-y-10">

        {/* Headline */}
        <div>
          <h1 className="text-[28px] font-bold tracking-tight text-foreground">
            Plan your perfect trip
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Use our AI to build a personalized itinerary in seconds.
          </p>
        </div>

        {/* Destination */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Where to?
          </label>

          <div className="flex rounded-xl overflow-hidden border border-border bg-muted">
            <input
              className="
                flex-1 h-12 px-4 text-sm
                bg-transparent text-foreground
                placeholder:text-muted-foreground
                focus:outline-none focus:ring-2 focus:ring-primary
              "
              placeholder="e.g., Kyoto, Japan"
              defaultValue="Kyoto, Japan"
            />
            <div className="flex items-center justify-center px-4 text-muted-foreground">
              <MapPin className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Date Range */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            When?
          </label>

          <div className="grid grid-cols-2 gap-3">
            <DateBox
              icon={<Calendar className="w-5 h-5" />}
              label="Start"
              value="Sep 15, 2023"
            />
            <DateBox
              icon={<CalendarClock className="w-5 h-5" />}
              label="End"
              value="Sep 20, 2023"
            />
          </div>
        </div>

        {/* Who is coming */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Who is coming?
          </label>

          <div className="flex flex-wrap gap-2">
            <Chip icon={<User className="w-4 h-4" />} label="Solo" />
            <Chip
              icon={<Users className="w-4 h-4" />}
              label="Couple"
              active
            />
            <Chip
              icon={<UsersRound className="w-4 h-4" />}
              label="Family"
            />
            <Chip
              icon={<UsersRound className="w-4 h-4" />}
              label="Friends"
            />
          </div>
        </div>

        {/* Budget */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-medium text-foreground">
              Budget
            </label>
            <span className="text-primary font-bold text-sm">
              $1,000 – $3,000
            </span>
          </div>

          <div className="relative h-2 rounded-full bg-muted">
            <div className="absolute left-1/4 w-1/3 h-full bg-primary rounded-full" />
            <SliderDot style={{ left: "25%" }} />
            <SliderDot style={{ left: "58%" }} />
          </div>

          <div className="flex justify-between text-xs text-muted-foreground font-medium">
            <span>Economy</span>
            <span>Luxury</span>
          </div>
        </div>

        {/* Vibe Check */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Vibe Check
          </label>

          <div className="flex flex-wrap gap-2">
            <Tag active label="Culture" />
            <Tag active label="Food" />
            <Tag label="Adventure" />
            <Tag label="Nature" />
            <Tag label="Nightlife" />
            <Tag label="Relaxation" />
            <Tag label="Shopping" />
          </div>
        </div>

        {/* Must Visit */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Must-visit places (Optional)
          </label>

          <div className="rounded-xl border border-border bg-muted p-2 min-h-[80px]">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="inline-flex items-center gap-1 bg-muted rounded px-2 py-1 text-xs font-medium text-secondary-foreground border border-gray">
                Arashiyama Bamboo Grove
                <button className="hover:text-destructive">
                  <X className="w-3 h-3" />
                </button>
              </span>
            </div>

            <input
              className="
                w-full bg-transparent text-sm
                text-foreground placeholder:text-muted-foreground
                focus:outline-none
              "
              placeholder="Type and press Enter..."
            />
          </div>
        </div>

        {/* Generate */}
        <button
          className="
            w-full h-12 rounded-3xl
            bg-primary text-primary-foreground
            font-bold flex items-center justify-center gap-2
            shadow-lg shadow-primary/25
            transition-all active:scale-[0.98]
          "
        >
          <Sparkles className="w-5 h-5" />
          Generate Itinerary
        </button>

      </div>
    </aside>
  )
}

/* ------------------------------------------------------------------ */
/* Reusable small components */
/* ------------------------------------------------------------------ */

function DateBox({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="
      flex items-center gap-2
      rounded-xl border border-border bg-muted
      p-3 cursor-pointer
      hover:border-primary/50 transition-colors
    ">
      <div className="text-muted-foreground">{icon}</div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">
          {label}
        </span>
        <span className="text-sm font-medium text-foreground">
          {value}
        </span>
      </div>
    </div>
  )
}

function Chip({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <button
      className={`
        flex items-center gap-2 h-9 px-4 rounded-lg text-xs font-medium
        transition-all
        ${
          active
            ? "bg-primary/10 text-primary border border-primary"
            : "bg-muted text-muted-foreground hover:bg-muted/70"
        }
      `}
    >
      {icon}
      {label}
    </button>
  )
}

function Tag({
  label,
  active,
}: {
  label: string
  active?: boolean
}) {
  return (
    <button
      className={`
        px-3 py-1.5 rounded-3xl text-xs font-medium
        transition-colors
        ${
          active
            ? "bg-primary text-primary-foreground border border-primary"
            : "bg-muted text-muted-foreground hover:border-border border border-transparent"
        }
      `}
    >
      {label}
    </button>
  )
}

function SliderDot({ style }: { style: React.CSSProperties }) {
  return (
    <div
      style={style}
      className="
        absolute top-1/2 -translate-y-1/2
        w-4 h-4 rounded-full
        bg-primary border-2 border-background
        shadow cursor-pointer
      "
    />
  )
}
