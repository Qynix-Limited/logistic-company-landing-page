import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { IconBadge } from "@/components/common/icon-badge"
import type { Feature } from "@/types"

interface FeatureCardProps
  extends Omit<React.ComponentProps<typeof Card>, "title">, Feature {}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "gap-4 p-5 transition-colors hover:border-brand-accent/40",
        className
      )}
      {...props}
    >
      <IconBadge icon={icon} />
      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm text-pretty text-muted-foreground">
          {description}
        </p>
      </div>
    </Card>
  )
}
