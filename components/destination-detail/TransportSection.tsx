import { Train, Bus } from "lucide-react"

export default function TransportGuide() {
  return (
    <section
      id="transport"
      className="bg-card border border-border rounded-2xl p-6 md:p-8"
    >
      <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
        <Train className="text-primary" />
        Local Transport Guide
      </h3>

      <div className="space-y-4">
        <AccordionItem
          icon={<Train size={16} />}
          title="Trains & Subway"
          description="Kyoto has two subway lines and extensive JR and private rail networks. An ICOCA card is recommended for seamless travel."
        />

        <AccordionItem
          icon={<Bus size={16} />}
          title="City Bus"
          description="Buses reach most temples not served by trains. Flat fare is usually 230 yen. Expect crowds during peak seasons."
        />
      </div>
    </section>
  )
}

function AccordionItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <div className="bg-muted p-4 flex items-center gap-3">
        <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
        <span className="font-bold text-foreground">{title}</span>
      </div>
      <div className="p-4 text-sm text-muted-foreground leading-relaxed border-t border-border bg-background">
        {description}
      </div>
    </div>
  )
}
