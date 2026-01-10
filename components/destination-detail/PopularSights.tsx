import Image from "next/image"
import { Star } from "lucide-react"

const sights = [
  {
    title: "Fushimi Inari Shrine",
    rating: 4.8,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVGqtB6TRoDeZk9UNHwUJazbnsQJ46t9j3sC5ABbF8_zi6ApCatz9XdydUyYOiVjqdLDCOZdEUP1FjZGaR06UrtrXCAqmCb2WDfx0jgZCGNm023SNXKFn-gxiu8IVV9OQ91-ccAS7Es11sIHs4EvhlqQE4FcF2t8MKKvWf2FHT01nQMg-wVYaPjo0l8TRwc7qGEDwYqkO3DkbikMitYGl0QKaquVb8uWyX7Ms249ScG5Z9I2cd-1PzCp9apTRC91QsrjOAL-8uveE",
    desc:
      "Famous for thousands of vermilion torii gates along forested trails.",
  },
  {
    title: "Kinkaku-ji",
    rating: 4.7,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTmyqrZeFNZEL33716jSx_cE0AfA3oOZE5zpyqCoH1N3o0_m4VLGukQzNIT9lUOzP_vlekRpF4AXKCgmt-D1flj0ge7ids1Jd3YV5fuoXPRMW1-SxCMgj63f9J7G01Za4SbR39khQ3cNjWWpmdTAxMnUU4Lps-ZTaiycnWzQ8Ov3Ci56u3zr8FV2O_cnRtyo2s4s8nzndnBXWbUMvbVc3Aw9ev9WyMw-H7dO_xGuEbN8kkUdVvk3rbT4iYXSqZAqERdpnj3CMST0c",
    desc:
      "The Golden Pavilion, covered in gold leaf and reflected in a serene pond.",
  },
  {
    title: "Arashiyama Bamboo Grove",
    rating: 4.9,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZZesulpPjSHUW9bY9yiFBP6WDN8LUnNb0GlpDF4VY_X3awcSxCmK1Xi4SQX5MZgn3VivTxmgEbw6dmH9WWj7BFxhODuOV62mr25hPu2i0DuBUSve4tumctKLQ2HKPfK334_s1WhRn1eohktGlUIjmorT3Hw-4BEnPPe49hC04wecSmVI7XCM0aQQC2PsmTfrAWbA1IViddImB2uvF2_6w87fPW6TiXpe-PS7TyBePIYapa68uPmxkXdZj7ryCEg3hmwb14ZtbGtw",
    desc:
      "A peaceful path through towering bamboo stalks.",
  },
]

export default function PopularSights() {
  return (
    <section id="sights" className="space-y-4">
      <h3 className="text-2xl font-bold text-foreground px-2">
        Popular Sights
      </h3>

      <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-6 -mx-4 px-4 snap-x scroll-smooth">
        {sights.map(sight => (
          <div
            key={sight.title}
            className="snap-center min-w-[280px] md:min-w-[300px] bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={sight.image}
                alt={sight.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md font-bold flex items-center gap-1">
                <Star size={14} className="text-yellow-400" fill="currentColor" />
                {sight.rating}
              </div>
            </div>

            <div className="p-4">
              <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                {sight.title}
              </h4>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                {sight.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
