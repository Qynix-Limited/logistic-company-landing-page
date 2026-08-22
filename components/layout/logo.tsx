import Link from "next/link"
import { TriangleIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

export function Logo({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "flex items-center gap-2 rounded-md font-semibold tracking-tight focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className
      )}
      {...props}
    >
      <span
        aria-hidden
        className="grid size-6 place-items-center rounded-md bg-brand-600 text-white"
      >
        <TriangleIcon className="size-3 fill-current" />
      </span>
      <span className="text-base">{siteConfig.name}</span>
    </Link>
  )
}
