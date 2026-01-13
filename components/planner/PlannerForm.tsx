"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import * as Slider from "@radix-ui/react-slider";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
  MapPin,
  Calendar,
  CalendarClock,
  User,
  Users,
  UsersRound,
  Sparkles,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT */
/* ------------------------------------------------------------------ */

export default function PlannerForm({
  onSubmit,
  loading,
}: {
  onSubmit: (data: any) => void;
  loading: boolean;
}) {
  /* -------------------- STATE -------------------- */
  const [destination, setDestination] = useState("");

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [activeCalendar, setActiveCalendar] =
    useState<"start" | "end" | null>(null);

  const [travelers, setTravelers] = useState<
    "Solo" | "Couple" | "Family" | "Friends" | null
  >("Couple");

  const [budget, setBudget] = useState<[number, number]>([1000, 3000]);

  const [interests, setInterests] = useState<string[]>(["culture", "food"]);

  const [mustVisit, setMustVisit] = useState<string[]>([]);

  const [mustVisitInput, setMustVisitInput] = useState("");

  /* -------------------- VALIDATION -------------------- */
  function validate(): boolean {
    if (!destination.trim()) {
      toast.error("Please enter destination");
      return false;
    }
    if (!startDate || !endDate) {
      toast.error("Please select start and end dates");
      return false;
    }
    if (!travelers) {
      toast.error("Please select who is coming");
      return false;
    }
    if (!budget || budget[0] >= budget[1]) {
      toast.error("Please select valid budget range");
      return false;
    }
    if (!interests.length) {
      toast.error("Please select at least one interest");
      return false;
    }
    return true;
  }

  /* -------------------- SUBMIT -------------------- */
  function handleSubmit() {
    if (!validate()) return;

    onSubmit({
      destination,
      startDate: startDate!.toISOString().slice(0, 10),
      endDate: endDate!.toISOString().slice(0, 10),
      travelers,
      budgetRange: `${budget[0]}-${budget[1]}`,
      pace: "Relaxed",
      interests,
      mustVisit,
    });
  }

  /* -------------------- HELPERS -------------------- */
  function toggleInterest(label: string) {
    setInterests((prev) =>
      prev.includes(label)
        ? prev.filter((i) => i !== label)
        : [...prev, label]
    );
  }

  function addMustVisit(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && mustVisitInput.trim()) {
      e.preventDefault();
      if (!mustVisit.includes(mustVisitInput.trim())) {
        setMustVisit([...mustVisit, mustVisitInput.trim()]);
      }
      setMustVisitInput("");
    }
  }

  function removeMustVisit(place: string) {
    setMustVisit(mustVisit.filter((p) => p !== place));
  }

  /* ------------------------------------------------------------------ */
  /* UI (UNCHANGED STRUCTURE) */
  /* ------------------------------------------------------------------ */

  return (
    <aside className="w-full lg:w-[480px] shrink-0 border-r border-border bg-background overflow-y-auto scrollbar-hide z-10 flex flex-col">
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
          <label className="text-sm font-medium text-foreground">Where to?</label>
          <div className="flex rounded-xl overflow-hidden border border-border bg-muted">
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="flex-1 h-12 px-4 text-sm bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="e.g., Kyoto, Japan"
            />
            <div className="flex items-center justify-center px-4 text-muted-foreground">
              <MapPin className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Date Range */}
        <div className="space-y-3 relative">
          <label className="text-sm font-medium text-foreground">When?</label>
          <div className="grid grid-cols-2 gap-3">
            <DateBox
              icon={<Calendar className="w-5 h-5" />}
              label="Start"
              value={startDate ? startDate.toDateString() : "Select date"}
              onClick={() => setActiveCalendar("start")}
            />
            <DateBox
              icon={<CalendarClock className="w-5 h-5" />}
              label="End"
              value={endDate ? endDate.toDateString() : "Select date"}
              onClick={() => setActiveCalendar("end")}
            />
          </div>

          {activeCalendar && (
            <div className="absolute z-50 mt-2 bg-card border border-border rounded-xl p-3">
<DayPicker
  mode="single"
  selected={activeCalendar === "start" ? startDate : endDate}
  onSelect={(date) => {
    if (activeCalendar === "start") setStartDate(date ?? null);
    if (activeCalendar === "end") setEndDate(date ?? null);
    setActiveCalendar(null);
  }}
  classNames={{
    months: "text-foreground",
    caption: "text-foreground font-bold",
    day: "text-foreground hover:bg-primary/20 rounded-md",
    day_selected: "bg-primary text-primary-foreground",
    day_today: "border border-primary",
    nav_button: "text-foreground hover:bg-muted rounded-md",
  }}
/>

            </div>
          )}
        </div>

        {/* Who is coming */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Who is coming?
          </label>
          <div className="flex flex-wrap gap-2">
            {["Solo", "Couple", "Family", "Friends"].map((t) => (
              <Chip
                key={t}
                icon={
                  t === "Solo" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Users className="w-4 h-4" />
                  )
                }
                label={t}
                active={travelers === t}
                onClick={() => setTravelers(t as any)}
              />
            ))}
          </div>
        </div>

        {/* Budget */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-medium text-foreground">
              Budget
            </label>
            <span className="text-primary font-bold text-sm">
              ${budget[0]} – ${budget[1]}
            </span>
          </div>

          <Slider.Root
            min={500}
            max={10000}
            step={100}
            value={budget}
            onValueChange={(v) => setBudget(v as [number, number])}
            className="relative h-2 rounded-full bg-muted"
          >
            <Slider.Track className="absolute h-full w-full bg-muted rounded-full" />
            <Slider.Range className="absolute h-full bg-primary rounded-full" />
            <Slider.Thumb className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow" />
            <Slider.Thumb className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow" />
          </Slider.Root>

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
            {[
              "Culture",
              "Food",
              "Adventure",
              "Nature",
              "Nightlife",
              "Relaxation",
              "Shopping",
            ].map((v) => (
              <Tag
                key={v}
                label={v}
                active={interests.includes(v.toLowerCase())}
                onClick={() => toggleInterest(v.toLowerCase())}
              />
            ))}
          </div>
        </div>

        {/* Must Visit */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Must-visit places (Optional)
          </label>
          <div className="rounded-xl border border-border bg-muted p-2 min-h-[80px]">
            <div className="flex flex-wrap gap-2 mb-2">
              {mustVisit.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1 bg-muted rounded px-2 py-1 text-xs font-medium text-secondary-foreground border border-gray"
                >
                  {p}
                  <button onClick={() => removeMustVisit(p)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <input
              value={mustVisitInput}
              onChange={(e) => setMustVisitInput(e.target.value)}
              onKeyDown={addMustVisit}
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              placeholder="Type and press Enter..."
            />
          </div>
        </div>

        {/* Generate */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full h-12 rounded-3xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
            loading
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground shadow-primary/25 active:scale-[0.98]"
          }`}
        >
          <Sparkles className="w-5 h-5" />
          {loading ? "Generating..." : "Generate Itinerary"}
        </button>
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* REUSABLE (UNCHANGED VISUALS) */
/* ------------------------------------------------------------------ */

function DateBox({
  icon,
  label,
  value,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-2 rounded-xl border border-border bg-muted p-3 cursor-pointer hover:border-primary/50 transition-colors"
    >
      <div className="text-muted-foreground">{icon}</div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">
          {label}
        </span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </div>
    </div>
  );
}

function Chip({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 h-9 px-4 rounded-lg text-xs font-medium transition-all ${
        active
          ? "bg-primary/10 text-primary border border-primary"
          : "bg-muted text-muted-foreground hover:bg-muted/70"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Tag({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-3xl text-xs font-medium transition-colors ${
        active
          ? "bg-primary text-primary-foreground border border-primary"
          : "bg-muted text-muted-foreground hover:border-border border border-transparent"
      }`}
    >
      {label}
    </button>
  );
}
