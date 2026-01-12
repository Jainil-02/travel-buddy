"use client"

import { SlidersHorizontal } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import FiltersSidebar from "./FiltersSideBar"

export default function MobileFiltersSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-sm font-medium">
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </SheetTrigger>

      <SheetContent side="bottom" className="h-[85vh] p-0">
        <SheetHeader className="p-4 border-b border-border">
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div className="h-full overflow-y-auto p-4">
          {/* reuse SAME sidebar */}
          <FiltersSidebar />
        </div>
      </SheetContent>
    </Sheet>
  )
}
