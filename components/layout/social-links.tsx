import Link from "next/link"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

const socials = [
  { name: "X", href: siteConfig.links.x, icon: Icons.x },
  {
    name: "Instagram",
    href: siteConfig.links.instagram,
    icon: Icons.instagram,
  },
  { name: "WhatsApp", href: siteConfig.links.whatsapp, icon: Icons.whatsapp },
]

export function SocialLinks({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul className={cn("flex items-center gap-2", className)} {...props}>
      {socials.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className="grid size-8 place-items-center rounded-full bg-muted text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="size-3.5" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
