"use client";

import { SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import FiltersSidebar from "./FiltersSidebar";

export default function MobileFilters() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="w-full flex items-center justify-center gap-2 h-12 rounded-3xl border border-border bg-card text-foreground font-medium hover:bg-muted transition-colors">
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </SheetTrigger>

      <SheetContent side="bottom" className="h-[85vh] p-0 rounded-t-2xl">
        <SheetHeader className="p-4 border-b border-border">
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div className="overflow-y-auto h-full pb-10">
          <FiltersSidebar variant="mobile" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
