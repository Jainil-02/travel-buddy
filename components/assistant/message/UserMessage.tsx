"use client"

export function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex justify-end w-full">
      <div
        className="
          max-w-[85%] sm:max-w-[70%] lg:max-w-[60%]
          bg-primary text-primary-foreground
          px-5 py-3 rounded-2xl rounded-br-none
          text-sm leading-relaxed
          shadow-lg shadow-primary/20
        "
      >
        {text}
      </div>
    </div>
  )
}
