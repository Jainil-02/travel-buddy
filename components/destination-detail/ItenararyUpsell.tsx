export default function ItineraryUpsell() {
  return (
    <aside className="block bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -right-6 -top-6 size-28 bg-white/10 rounded-full blur-2xl" />

      <h4 className="font-bold text-xl mb-2 relative z-10">
        Get the full itinerary
      </h4>

      <p className="text-primary-foreground/80 text-sm mb-4 relative z-10">
        Unlock a day-by-day plan crafted by AI for your 5-day trip to Kyoto.
      </p>

      <button className="w-full py-3 bg-background text-primary font-bold rounded-xl text-sm hover:bg-background/90 transition-colors relative z-10">
        Generate Itinerary
      </button>
    </aside>
  )
}
