import Image from "next/image"
import { ArrowRightIcon, ListIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { adminDeliveries, adminStats } from "@/content/admin"
import { Card } from "@/components/ui/card"
import { IconBadge } from "@/components/common/icon-badge"
import { StatusPill } from "@/components/common/status-pill"

const columns = ["ID", "Route", "Rider", "Status", "Fare"]

export function AdminDashboard({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card className={cn("gap-0 p-0", className)} {...props}>
      <div className="flex items-center gap-3 border-b border-border px-5 py-3.5">
        <Image
          src="/images/fiamove-mark.png"
          alt=""
          width={301}
          height={256}
          className="h-4 w-auto"
        />
        <span className="text-sm font-semibold">{siteConfig.name} Admin</span>
        <span className="font-mono text-xs text-muted-foreground">
          / Dashboard
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.6875rem] text-success">
          <span className="size-1.5 rounded-full bg-success" />
          Live
        </span>
      </div>

      <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-4">
        {adminStats.map((stat) => (
          <Card key={stat.label} className="gap-3 p-4">
            <IconBadge icon={stat.icon} size="sm" />
            <div className="flex flex-col gap-0.5">
              <p className="text-xl font-bold tracking-tight">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="font-mono text-[0.625rem] text-brand-accent">
                {stat.delta}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mx-5 mb-5 overflow-hidden rounded-lg border border-border">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <ListIcon className="size-3.5 text-muted-foreground" />
          <span className="text-xs font-semibold">Live Deliveries</span>
          <button
            type="button"
            className="ml-auto flex items-center gap-1 text-xs text-brand-accent transition-colors hover:text-brand-accent"
          >
            View All
            <ArrowRightIcon className="size-3" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left">
            <thead>
              <tr className="border-b border-border">
                {columns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-4 py-2 eyebrow font-normal text-muted-foreground"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {adminDeliveries.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-border/60 last:border-0"
                >
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {row.id}
                  </td>
                  <td className="px-4 py-3 text-xs">
                    {row.from} <span className="text-muted-foreground">→</span>{" "}
                    {row.to}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {row.rider}
                  </td>
                  <td className="px-4 py-3">
                    <StatusPill status={row.status} />
                  </td>
                  <td className="px-4 py-3 font-mono text-xs font-medium">
                    {row.fare}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}
