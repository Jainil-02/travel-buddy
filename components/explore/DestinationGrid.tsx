import ActiveFilters from "./ActiveFilters";
import DestinationCard from "./DestinationCard";
import { SlidersHorizontal } from "lucide-react";
import MobileFilters from "./MobileFilters";

export default function DestinationGrid() {
  return (
    <section className="p-6 md:p-10 -mt-10 relative z-20">
      <div className="flex lg:hidden my-6">
        <MobileFilters />
      </div>
      <ActiveFilters />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {/* Cards stay unchanged */}
        <DestinationCard
          title="Kyoto"
          country="Japan"
          price="$1,200"
          rating={4.9}
          image="/images/Kyoto.png"
          tags={["Culture", "Nature", "Safe"]} /* Kyoto */
        />
        <DestinationCard
          title="Kyoto"
          country="Japan"
          price="$1,200"
          rating={4.9}
          image="/images/destinations/kyoto.jpg"
          tags={["Culture", "Nature", "Safe"]} /* Santorini */
        />
        <DestinationCard
          title="Kyoto"
          country="Japan"
          price="$1,200"
          rating={4.9}
          image="/images/destinations/kyoto.jpg"
          tags={["Culture", "Nature", "Safe"]} /* Reykjavik */
        />
        <DestinationCard
          title="Kyoto"
          country="Japan"
          price="$1,200"
          rating={4.9}
          image="/images/destinations/kyoto.jpg"
          tags={["Culture", "Nature", "Safe"]} /* Halong Bay */
        />
        <DestinationCard
          title="Kyoto"
          country="Japan"
          price="$1,200"
          rating={4.9}
          image="/images/destinations/kyoto.jpg"
          tags={["Culture", "Nature", "Safe"]} /* Maldives */
        />
        <DestinationCard
          title="Kyoto"
          country="Japan"
          price="$1,200"
          rating={4.9}
          image="/images/destinations/kyoto.jpg"
          tags={["Culture", "Nature", "Safe"]} /* Agra */
        />
      </div>
    </section>
  );
}
