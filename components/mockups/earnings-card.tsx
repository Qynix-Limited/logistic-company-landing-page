import { TrendingUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { riderEarnings } from "@/content/rider-app"
import { Card } from "@/components/ui/card"
import { Eyebrow } from "@/components/common/eyebrow"
import { StatItem } from "@/components/common/stat-item"

export function EarningsCard({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  const peak = Math.max(...riderEarnings.bars.map((bar) => bar.value))

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Card className="gap-5 p-5" {...props}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <Eyebrow className="text-muted-foreground">
              {riderEarnings.period}
            </Eyebrow>
            <p className="text-3xl font-bold tracking-tight">
              {riderEarnings.total}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-md bg-success/12 px-2 py-1 font-mono text-[0.6875rem] text-success">
            <TrendingUpIcon className="size-3" />
            {riderEarnings.delta}
          </span>
        </div>

        <div className="flex h-28 items-end gap-2">
          {riderEarnings.bars.map((bar) => (
            <div
              key={bar.day}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <div className="flex h-full w-full items-end">
                <div
                  className={cn(
                    "w-full rounded-t-sm",
                    bar.value === peak ? "bg-brand-500" : "bg-muted"
                  )}
                  style={{ height: `${bar.value}%` }}
                />
              </div>
              <span className="font-mono text-[0.5625rem] text-muted-foreground">
                {bar.day}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-3">
        {riderEarnings.summary.map((stat) => (
          <Card key={stat.label} className="p-4">
            <StatItem {...stat} size="sm" />
          </Card>
        ))}
      </div>
    </div>
  )
}
