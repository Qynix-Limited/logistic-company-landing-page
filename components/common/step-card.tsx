import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { IconBadge } from "@/components/common/icon-badge"
import type { IconComponent, Step } from "@/types"

interface StepCardProps
  extends Omit<React.ComponentProps<typeof Card>, "title">, Step {
  index: number
  icon: IconComponent
}

export function StepCard({
  index,
  title,
  description,
  icon,
  className,
  ...props
}: StepCardProps) {
  return (
    <Card className={cn("gap-4 p-5", className)} {...props}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-border" />
        <IconBadge icon={icon} size="sm" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm text-pretty text-muted-foreground">
          {description}
        </p>
      </div>
    </Card>
  )
}
