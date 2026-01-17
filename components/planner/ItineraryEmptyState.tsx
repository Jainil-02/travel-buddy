import { Map, CalendarDays, Sparkles } from "lucide-react"

export default function ItineraryEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16">
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <Sparkles className="h-8 w-8 text-primary" />
      </div>

      {/* Title */}
      <h2 className="text-2xl text-foreground font-semibold tracking-tight">
        Plan your perfect trip
      </h2>

      {/* Subtitle */}
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Fill in your travel details and let AI create a personalized, day-by-day
        itinerary tailored to your interests.
      </p>

      {/* Feature list */}
      <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
        <FeatureCard
          icon={<CalendarDays className="h-6 w-6" />}
          title="Day-wise planning"
          description="Organized itinerary with activities planned for each day."
        />
        <FeatureCard
          icon={<Map className="h-6 w-6" />}
          title="Curated experiences"
          description="Thoughtful suggestions based on your travel style."
        />
        <FeatureCard
          icon={<Sparkles className="h-6 w-6" />}
          title="AI-powered"
          description="Smart planning that adapts to your inputs."
        />
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-xl border bg-background p-6 text-left shadow-sm">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-primary">
        {icon}
      </div>
      <h3 className="text-sm text-foreground font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
