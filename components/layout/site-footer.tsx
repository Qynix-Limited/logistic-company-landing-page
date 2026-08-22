import Link from "next/link"
import { MailIcon, MessageCircleIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { footerNav } from "@/config/nav"
import { Container } from "@/components/common"
import { Logo } from "@/components/layout/logo"
import { SocialLinks } from "@/components/layout/social-links"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="max-w-[24ch] text-sm text-pretty text-muted-foreground">
              AI-powered logistics for social sellers across Nigeria.
            </p>
            <SocialLinks />
          </div>

          {footerNav.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold">{column.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {column.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      {...(item.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} Ltd. All rights
            reserved.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="flex max-w-full items-center gap-2 transition-colors hover:text-foreground"
            >
              <MailIcon className="size-4 shrink-0" />
              <span className="truncate">{siteConfig.contact.email}</span>
            </Link>
            <Link
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <MessageCircleIcon className="size-4 shrink-0" />
              {siteConfig.contact.whatsapp}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
