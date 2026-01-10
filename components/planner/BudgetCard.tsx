import { DollarSign } from "lucide-react"

export default function BudgetCard({
  title,
  value,
}: {
  title: string
  value: string
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>{title}</span>
        <DollarSign className="w-4 h-4" />
      </div>
      <p className="text-xl font-bold mt-2">{value}</p>
    </div>
  )
}
