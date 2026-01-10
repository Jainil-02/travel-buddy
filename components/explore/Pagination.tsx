import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-12 mb-6">
      <button className="size-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted">
        <ChevronLeft size={18} />
      </button>

      <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
        1
      </button>

      <button className="size-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted font-medium text-sm">
        2
      </button>

      <button className="size-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted font-medium text-sm">
        3
      </button>

      <span className="text-muted-foreground px-2">…</span>

      <button className="size-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted font-medium text-sm">
        12
      </button>

      <button className="size-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:bg-muted">
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
