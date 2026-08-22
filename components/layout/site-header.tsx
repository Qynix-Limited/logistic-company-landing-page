"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { mainNav } from "@/config/nav"
import { useScroll } from "@/hooks/use-scroll"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/common"
import { Logo } from "@/components/layout/logo"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ThemeToggle } from "@/components/layout/theme-toggle"

export function SiteHeader() {
  const scrolled = useScroll()

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200",
        scrolled && "border-b border-border bg-background/80 backdrop-blur-md"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button className="hidden rounded-full md:inline-flex" asChild>
            <Link href="#download">Get the App</Link>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
