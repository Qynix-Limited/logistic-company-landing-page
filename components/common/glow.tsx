import { cn } from "@/lib/utils"

interface GlowProps extends React.ComponentProps<"div"> {
  position?: "top-left" | "top-right" | "center"
}

const positions = {
  "top-left": "left-[-10%] top-[-20%]",
  "top-right": "right-[-10%] top-[-20%]",
  center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
}

export function Glow({
  position = "top-left",
  className,
  ...props
}: GlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 size-[42rem] max-w-[110vw] rounded-full opacity-40 blur-[120px] dark:opacity-60",
        "bg-[radial-gradient(circle,var(--brand-500)_0%,transparent_70%)]",
        positions[position],
        className
      )}
      {...props}
    />
  )
}
