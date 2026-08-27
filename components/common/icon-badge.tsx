import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import type { IconComponent } from "@/types"

const iconBadgeVariants = cva(
  "inline-grid shrink-0 place-items-center rounded-lg",
  {
    variants: {
      variant: {
        brand: "bg-brand-accent/10 text-brand-accent",
        muted: "bg-muted text-muted-foreground",
        solid: "bg-primary text-primary-foreground",
      },
      size: {
        sm: "size-7 [&_svg]:size-3.5",
        default: "size-9 [&_svg]:size-4",
        lg: "size-11 [&_svg]:size-5",
      },
    },
    defaultVariants: { variant: "brand", size: "default" },
  }
)

interface IconBadgeProps
  extends React.ComponentProps<"span">, VariantProps<typeof iconBadgeVariants> {
  icon: IconComponent
}

export function IconBadge({
  icon: Icon,
  variant,
  size,
  className,
  ...props
}: IconBadgeProps) {
  return (
    <span
      aria-hidden
      className={cn(iconBadgeVariants({ variant, size }), className)}
      {...props}
    >
      <Icon />
    </span>
  )
}

export { iconBadgeVariants }
