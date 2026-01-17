export default function ItinerarySkeleton() {
  return (
    <div className="space-y-6 p-2">
      {Array.from({ length: 3 }).map((_, dayIndex) => (
        <div
          key={dayIndex}
          className="rounded-xl border bg-background p-4 shadow-sm"
        >
          {/* Day title */}
          <div className="mb-4 h-5 w-40 rounded bg-muted animate-pulse" />

          {/* Activities */}
          <div className="space-y-4">
            {Array.from({ length: 2 }).map((_, activityIndex) => (
              <div key={activityIndex} className="flex gap-4">
                {/* Image */}
                <div className="h-16 w-16 flex-shrink-0 rounded-lg bg-muted animate-pulse" />

                {/* Text */}
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
                  <div className="h-3 w-1/2 rounded bg-muted animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
