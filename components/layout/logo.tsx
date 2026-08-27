import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

/**
 * The lockup ships as two PNGs rather than one: the wordmark is ink on light
 * and white on dark. They are swapped with CSS, not the theme hook, so the
 * correct one paints on the server render with no flash.
 */
export function Logo({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "inline-flex rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className
      )}
      {...props}
    >
      <Image
        src="/images/fiamove-logo-light.png"
        alt={siteConfig.name}
        width={1043}
        height={220}
        priority
        className="h-7 w-auto dark:hidden"
      />
      <Image
        src="/images/fiamove-logo-dark.png"
        alt={siteConfig.name}
        width={1043}
        height={220}
        priority
        className="hidden h-7 w-auto dark:block"
      />
    </Link>
  )
}
