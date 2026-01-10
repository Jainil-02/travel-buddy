import Chip from "@/components/common/Chip"

export default function ActiveFilters() {
  return (
    <div className="flex flex-wrap gap-2 my-8">
      <Chip >
        Budget: $800–$2,500
      </Chip>

      <Chip >
        Season: Summer
      </Chip>

      <button className="text-primary text-xs font-medium hover:underline ml-2">
        Clear all
      </button>
    </div>
  )
}
