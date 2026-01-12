import { Plus } from "lucide-react"

export default function SavedTripsHeader() {
  return (
    <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">Saved Trips</h1>
        <p className="text-muted-foreground max-w-lg">
          Manage your upcoming adventures, revisit memories, and organize drafts.
        </p>
      </div>

      <button className="inline-flex items-center gap-2 h-11 px-6 rounded-3xl bg-primary text-white font-bold shadow-lg hover:bg-primary/90">
        <Plus size={18} />
        Create New Trip
      </button>
    </section>
  )
}
