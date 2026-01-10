import BestTimeSection from "./BestTimeSection";
import FoodAndCulture from "./FoodAndCulture";
import HeroSection from "./HeroSection";
import ItineraryUpsell from "./ItenararyUpsell";
import MapSidebar from "./MapSidebar";
import PopularSights from "./PopularSights";
import QuickStats from "./QuickStats";
import TransportGuide from "./TransportSection";
// import BestTimeSection from "./BestTimeSection"
// import TransportSection from "./TransportSection"
// import MapSidebar from "./MapSidebar"

export default function DestinationDetailLayout() {
  return (
    <main className="flex justify-center w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="w-full max-w-[1600px] flex flex-col gap-10">
        {/* Hero */}
        <HeroSection />

        {/* Quick stats */}
        <QuickStats />

        {/* Main grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col gap-10">
            <BestTimeSection />
            <PopularSights />
            <TransportGuide />
            <FoodAndCulture />
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <MapSidebar />
              <ItineraryUpsell />{" "}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
