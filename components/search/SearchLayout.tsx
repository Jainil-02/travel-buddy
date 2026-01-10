import SearchHero from "./SearchHero"
import FiltersSidebar from "./FiltersSideBar"
import ResultsToolbar from "./ResultsToolbar"
// import AIInsightBanner from "./AIInsightBanner"
import ResultsList from "./ResultsSection"
import FloatingAIButton from "./FloatingAIButton"
import ComparisonDrawer from "./ComparisonDrawer"
import ResultsSection from "./ResultsSection"

export default function SearchLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero */}
      <SearchHero />

      {/* Main Content */}
      <main className=" pb-20 justify-center w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-[1600px] mx-auto flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <FiltersSidebar />
          </aside>

          {/* Results */}
          <section className="flex-1 flex flex-col gap-6">
            {/* <ResultsToolbar />
            {/* <AIInsightBanner /> */}
            {/* <ResultsList /> */}
            <ResultsSection />
          </section>
        </div>
      </main>

      {/* Floating / Sticky UI */}
      {/* <FloatingAIButton /> */}
      <ComparisonDrawer />
    </div>
  )
}
