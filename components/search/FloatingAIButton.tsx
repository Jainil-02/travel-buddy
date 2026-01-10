import { Sparkles } from "lucide-react"

export default function FloatingAIButton() {
  return (
    <button className="fixed bottom-6 right-6 size-14 bg-background text-primary rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-40">
      <Sparkles size={28} />
    </button>
  )
}
