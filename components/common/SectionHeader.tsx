interface Props {
  title: string
  description?: string
  center?: boolean
}

export default function SectionHeader({ title, description, center }: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      {description && (
        <p className="text-muted-foreground mt-2 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
