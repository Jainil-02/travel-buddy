import { X } from "lucide-react"
import { ReactNode } from "react"

interface ChipProps {
  children: ReactNode
  onRemove?: () => void
  active?: boolean
}

export default function Chip({ children, onRemove, active }: ChipProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs border",
        active
          ? "bg-primary text-white border-primary"
          : "bg-card text-muted-foreground border-border",
      ].join(" ")}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="hover:text-foreground"
        >
          <X size={12} />
        </button>
      )}
    </span>
  )
}
