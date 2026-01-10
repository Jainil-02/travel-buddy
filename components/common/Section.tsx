import { ReactNode } from "react"

interface SectionProps {
  title?: string
  action?: ReactNode
  children: ReactNode
}

export default function Section({ title, action, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-4">
      {(title || action) && (
        <div className="flex items-center justify-between">
          {title && (
            <h3 className="text-sm font-semibold text-foreground">
              {title}
            </h3>
          )}
          {action}
        </div>
      )}
      {children}
    </section>
  )
}
