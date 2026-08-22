import { cn } from "@/lib/utils"
import type { Stat } from "@/types"

interface StatItemProps extends React.ComponentProps<"div">, Stat {
  size?: "sm" | "default"
}

export function StatItem({
  value,
  label,
  size = "default",
  className,
  ...props
}: StatItemProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      <span
        className={cn(
          "font-bold tracking-tight",
          size === "default" ? "text-2xl sm:text-3xl" : "text-lg"
        )}
      >
        {value}
      </span>
      <span className="text-xs text-muted-foreground sm:text-sm">{label}</span>
    </div>
  )
}
