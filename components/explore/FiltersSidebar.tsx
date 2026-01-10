"use client";

import {
  Sparkles,
  ChevronDown,
  Sun,
  Snowflake,
  Leaf,
  Flower,
} from "lucide-react";

interface FiltersSidebarProps {
  variant?: "desktop" | "mobile";
}

export default function FiltersSidebar({
  variant = "desktop",
}: FiltersSidebarProps) {
  return (
    <aside
      className={[
        "w-full flex flex-col gap-6 p-6",
        "bg-background",
        "overflow-y-auto",
        variant === "desktop"
          ? "h-full"
          : "h-auto",
      ].join(" ")}
    >      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">Filters</h3>
        <button className="text-primary text-sm font-medium hover:underline">
          Reset All
        </button>
      </div>

      {/* AI Toggle */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20">
        <div className="flex items-center gap-2">
          <Sparkles className="text-primary" size={18} />
          <span className="text-sm font-semibold text-foreground">
            AI Recommended
          </span>
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" defaultChecked className="sr-only peer" />
          <div className="w-11 h-6 rounded-full bg-muted peer-checked:bg-primary relative transition-colors">
            <span className="absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-background border border-border transition-all peer-checked:translate-x-full" />
          </div>
        </label>
      </div>

      {/* Budget Range */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-foreground">Budget Range</p>
          <span className="text-xs text-muted-foreground">Per person</span>
        </div>

        {/* Static visual slider (same as HTML) */}
        <div className="relative pt-6 pb-2">
          <div className="h-1 w-full rounded-full bg-border relative">
            <div className="absolute h-1 bg-primary rounded-full left-[20%] right-[30%]" />

            {/* Left thumb */}
            <div className="absolute top-4 left-[20%] -translate-x-1/2 size-4 bg-background border-2 border-primary rounded-full shadow-md">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card text-foreground text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                $800
              </div>
            </div>

            {/* Right thumb */}
            <div className="absolute top-4 right-[30%] translate-x-1/2 size-4 bg-background border-2 border-primary rounded-full shadow-md">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card text-foreground text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                $2,500
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-xs text-muted-foreground">
          <span>$100</span>
          <span>$10k+</span>
        </div>
      </div>

      {/* Best Season */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-foreground">Best Season</p>

        <div className="flex flex-wrap gap-2">
          <SeasonButton icon={<Flower size={16} className="text-pink-400" />}>
            Spring
          </SeasonButton>

          <SeasonButton active icon={<Sun size={16} />}>
            Summer
          </SeasonButton>

          <SeasonButton icon={<Leaf size={16} className="text-orange-400" />}>
            Autumn
          </SeasonButton>

          <SeasonButton
            icon={<Snowflake size={16} className="text-blue-300" />}
          >
            Winter
          </SeasonButton>
        </div>
      </div>

      {/* Accordions */}
      <div className="flex flex-col gap-2">
        <FilterAccordion
          title="Country"
          options={["Japan", "Iceland", "Italy"]}
        />
        <FilterAccordion
          title="Activities"
          options={["Hiking", "Beach", "City Tour"]}
        />
        <FilterAccordion title="Climate" options={["Tropical", "Polar"]} />
      </div>
    </aside>
  );
}

/* ---------------- Sub Components ---------------- */

function SeasonButton({
  children,
  icon,
  active,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={[
        "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-colors",
        active
          ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
          : "bg-card text-muted-foreground border-border hover:border-primary/50",
      ].join(" ")}
    >
      {icon}
      {children}
    </button>
  );
}

function FilterAccordion({
  title,
  options,
}: {
  title: string;
  options: string[];
}) {
  return (
    <details className="group py-2 border-b border-border last:border-none">
      <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-foreground list-none">
        {title}
        <ChevronDown
          className="text-muted-foreground transition-transform group-open:rotate-180"
          size={16}
        />
      </summary>

      <div className="pt-3 pb-1 flex flex-col gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-muted"
          >
            <input
              type="checkbox"
              className="rounded border-border text-primary focus:ring-primary bg-background"
            />
            <span className="text-sm text-muted-foreground">{option}</span>
          </label>
        ))}
      </div>
    </details>
  );
}
