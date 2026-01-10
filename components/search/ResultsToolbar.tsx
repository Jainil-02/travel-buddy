import { ChevronDown, LayoutGrid, List } from "lucide-react"

export default function ResultsToolbar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card border border-border p-4 rounded-xl">
      <div>
        <h2 className="text-lg font-bold">124 properties found</h2>
        <p className="text-muted-foreground text-sm">
          Prices include taxes and fees
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <select className="appearance-none bg-background border border-border text-foreground pl-4 pr-10 py-2 rounded-lg text-sm font-medium cursor-pointer focus:outline-none focus:border-primary">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Rating: High to Low</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        </div>

        <div className="flex bg-background rounded-lg p-1 border border-border">
          <button className="p-1.5 bg-muted rounded">
            <LayoutGrid size={16} />
          </button>
          <button className="p-1.5 text-muted-foreground hover:text-foreground">
            <List size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
