import ExploreHero from "@/components/explore/ExploreHero";
import FiltersSidebar from "@/components/explore/FiltersSidebar";
import DestinationGrid from "@/components/explore/DestinationGrid";
import Pagination from "@/components/explore/Pagination";

export default function ExplorePage() {
  return (
    <main className="flex max-w-[1600px] mx-auto w-full">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 border-r border-border bg-background sticky top-[73px] h-[calc(100vh-73px)]">
        <FiltersSidebar variant="desktop" />
      </aside>

      {/* Main content */}
      <section className="flex-1 overflow-x-hidden">
        <ExploreHero />
        <DestinationGrid />
        <Pagination />
      </section>
    </main>
  );
}
// app/(main)/explore/page.tsx
// export default function ExploreTest() {
//   return <h1>Explore OK</h1>
// }
