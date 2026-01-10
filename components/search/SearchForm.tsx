"use client"

import { MapPin, Calendar, User, Search } from "lucide-react"

export default function SearchForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 p-2">
      {/* Destination */}
      <div className="lg:col-span-4 group">
        <div className="flex items-center h-16 rounded-xl bg-background border border-border px-4 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
          <MapPin className="mr-3 text-muted-foreground group-focus-within:text-primary" />
          <div className="flex flex-col flex-1">
            <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
              Destination
            </label>
            <input
              className="bg-transparent border-none p-0 text-foreground placeholder:text-muted-foreground focus:ring-0 text-base font-medium"
              placeholder="City or Airport"
              defaultValue="Tokyo, Japan"
            />
          </div>
        </div>
      </div>

      {/* Dates */}
      <div className="lg:col-span-3 group">
        <div className="flex items-center h-16 rounded-xl bg-background border border-border px-4 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
          <Calendar className="mr-3 text-muted-foreground group-focus-within:text-primary" />
          <div className="flex flex-col flex-1">
            <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
              Check-in — Check-out
            </label>
            <input
              className="bg-transparent border-none p-0 text-foreground focus:ring-0 text-base font-medium"
              defaultValue="Oct 24 — Nov 02"
            />
          </div>
        </div>
      </div>

      {/* Guests */}
      <div className="lg:col-span-3 group">
        <div className="flex items-center h-16 rounded-xl bg-background border border-border px-4 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
          <User className="mr-3 text-muted-foreground group-focus-within:text-primary" />
          <div className="flex flex-col flex-1">
            <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
              Guests
            </label>
            <input
              className="bg-transparent border-none p-0 text-foreground focus:ring-0 text-base font-medium"
              defaultValue="2 Adults, 1 Room"
            />
          </div>
        </div>
      </div>

      {/* Search CTA */}
      <div className="lg:col-span-2">
        <button className="h-16 w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all">
          <Search size={20} />
          Search
        </button>
      </div>
    </div>
  )
}
