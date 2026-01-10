import ResultsToolbar from "./ResultsToolbar"
import AiInsightBanner from "./AIInsightBanner"
import HotelCard from "./HotelResultCard"

export default function ResultsSection() {
  return (
    <section className="flex-1 flex flex-col gap-6">
      <ResultsToolbar />

      <AiInsightBanner />

      <HotelCard
        featured
        title="The Royal Park Hotel"
        location="Minato City, Tokyo"
        distance="2.4 km from center"
        rating="4.8"
        price="$245"
        oldPrice="$320"
        badges={["Free Wifi", "Pool", "Spa"]}
        image="/images/Hotel1.png"
      />

      <HotelCard
        aiPick
        title="Shinjuku Granbell Hotel"
        location="Shinjuku, Tokyo"
        distance="0.5 km from station"
        rating="4.5"
        price="$189"
        badges={["Bar", "Restaurant"]}
        image="/images/Hotel2.png"
      />

      <HotelCard
        title="Aman Tokyo"
        location="Chiyoda City, Tokyo"
        distance="Near Imperial Palace"
        rating="5.0"
        price="$850"
        image="/images/Hotel3.png"
      />

      <button className="w-full py-4 text-sm font-bold text-muted-foreground hover:text-foreground border border-dashed border-border rounded-xl hover:border-primary transition-colors">
        Load more results
      </button>
    </section>
  )
}
