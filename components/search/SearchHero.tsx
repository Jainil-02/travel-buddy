import SearchTabs from "./SearchTabs"
import SearchForm from "./SearchForm"

export default function SearchHero() {
  return (
    <section className="relative w-full pt-10 pb-8 px-4 sm:px-6 lg:px-8 py-8 bg-background justify-center ">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto">
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-2">
          Where to next?
        </h1>
        <p className="text-muted-foreground text-base lg:text-lg mb-8">
          Discover your next adventure with AI-powered insights.
        </p>

        <div className="bg-card border border-border rounded-2xl p-2 shadow-xl">
          <SearchTabs />
          <SearchForm />
        </div>
      </div>
    </section>
  )
}
