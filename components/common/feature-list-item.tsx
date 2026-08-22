import { cn } from "@/lib/utils"
import { IconBadge } from "@/components/common/icon-badge"
import type { Feature } from "@/types"

interface FeatureListItemProps
  extends Omit<React.ComponentProps<"li">, "title">, Feature {}

export function FeatureListItem({
  title,
  description,
  icon,
  className,
  ...props
}: FeatureListItemProps) {
  return (
    <li className={cn("flex gap-4", className)} {...props}>
      <IconBadge icon={icon} />
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm text-pretty text-muted-foreground">
          {description}
        </p>
      </div>
    </li>
  )
}
