import { Download, Heart, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex gap-3 z-50">
      <Button variant="outline" className="gap-2">
        <Download className="w-4 h-4" />
        PDF
      </Button>
      <Button variant="outline" className="gap-2">
        <Heart className="w-4 h-4" />
        Save
      </Button>
      <Button className="gap-2 font-bold">
        <Wand2 className="w-4 h-4" />
        Modify with AI
      </Button>
    </div>
  )
}
