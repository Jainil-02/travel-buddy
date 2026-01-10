import Image from "next/image"
import { Landmark } from "lucide-react"

export default function FoodAndCulture() {
  return (
    <section id="culture" className="space-y-4">
      <h3 className="text-2xl font-bold text-foreground px-2">
        Food & Culture Tips
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FoodCard
          title="Kaiseki Ryori"
          desc="Traditional multi-course haute cuisine. An artistic and seasonal dining experience."
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBsaQwJ9ZOg7tRejWy82RwVAJy5yFCuSfd0ZYoo-2kHM9F4Ao7zoovBk_N75s9ihv5beSsQF1h3tTg6zuHGgq8BD1DoRWPZX7QEDW_tAMmy20iRSBRvDISvvLnB-EmEtjWM7hKFGVT10L07oEYwF1np0r7j894Q1RujtFDVv2E6hismcLpdAKKa4coeMpyoFoOKCIryzR1UwNto2wFrq78p8mefjliEkBv_HpYOFRhWKhxdGeomtd5mZdp49n9w9H51TBMTTZL_me4"
        />

        <FoodCard
          title="Matcha Sweets"
          desc="Uji produces Japan’s finest tea. Try matcha parfait or soft serve."
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Tn7Q13Q29BydRZK4-eAY1MP2s6Uo3CnEpxdp6j0wTfsYY0Eh7yEISo93KsTZF7HJbIsbXBPTqbo3E_tZwOGfkWxvl5Ra_vwq9W1eJQXYoPDfqrSbh8FDeFADdvfGjo_OVcxMp2zewDnUhHg6lw-Wbz4Qg59OYbGoK8tPokHgn_rLZ2AHoW477mou6Zw8o_HJSrmCRuiwN-pMMoIRuuW0jBwB_nEm_TlDQYJBAqfVXqT5OKTZZUtjtuiz_HReCX7JyBjBOf98GpE"
        />

        <div className="md:col-span-2 bg-primary/5 p-5 rounded-2xl border border-primary/10 flex gap-4 items-start">
          <div className="size-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
            <Landmark size={18} />
          </div>
          <div>
            <h4 className="font-bold text-lg text-foreground">
              Temple Etiquette
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Remove shoes when entering temples. Photography may be restricted.
              Bow slightly at shrine gates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FoodCard({
  title,
  desc,
  image,
}: {
  title: string
  desc: string
  image: string
}) {
  return (
    <div className="bg-card border border-border p-5 rounded-2xl flex gap-4">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="rounded-full object-cover shrink-0"
        unoptimized
      />
      <div>
        <h4 className="font-bold text-lg text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  )
}
