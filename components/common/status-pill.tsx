import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import type { DeliveryStatus } from "@/types"

const statusPillVariants = cva(
  "inline-flex items-center rounded-md px-2 py-0.5 font-mono text-[0.6875rem] font-medium",
  {
    variants: {
      tone: {
        info: "bg-info/12 text-info",
        success: "bg-success/12 text-success",
        warning: "bg-warning/12 text-warning",
        neutral: "bg-muted text-muted-foreground",
        brand: "bg-brand-accent/12 text-brand-accent",
      },
    },
    defaultVariants: { tone: "neutral" },
  }
)

const statusTones: Record<
  DeliveryStatus,
  NonNullable<VariantProps<typeof statusPillVariants>["tone"]>
> = {
  Pending: "neutral",
  Assigned: "brand",
  "Picked Up": "warning",
  "In Transit": "info",
  Delivered: "success",
}

export function StatusPill({
  status,
  className,
  ...props
}: React.ComponentProps<"span"> & { status: DeliveryStatus }) {
  return (
    <span
      className={cn(
        statusPillVariants({ tone: statusTones[status] }),
        className
      )}
      {...props}
    >
      {status}
    </span>
  )
}

export { statusPillVariants }
