export default function TripsFilterTabs() {
  return (
    <section className="flex gap-2 overflow-x-auto pb-2">
      <Filter active label="All Trips" />
      <Filter label="Upcoming" />
      <Filter label="Past" />
      <Filter label="Drafts" />
    </section>
  )
}

function Filter({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`h-9 px-5 rounded-full text-sm font-medium whitespace-nowrap
        ${
          active
            ? "bg-foreground text-background"
            : "bg-card border border-border text-muted-foreground hover:bg-muted"
        }`}
    >
      {label}
    </button>
  )
}
