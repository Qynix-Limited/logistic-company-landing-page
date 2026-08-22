import Link from "next/link"

import { cn } from "@/lib/utils"
import type { StoreLink } from "@/types"

export function StoreButton({
  label,
  name,
  href,
  icon: Icon,
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href"> & StoreLink) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-3 rounded-xl bg-foreground px-4 py-2.5 text-background transition-colors hover:bg-foreground/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className
      )}
      {...props}
    >
      <Icon className="size-6" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.625rem] opacity-70">{label}</span>
        <span className="text-sm font-semibold">{name}</span>
      </span>
    </Link>
  )
}
