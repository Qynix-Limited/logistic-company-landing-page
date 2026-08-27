import Link from "next/link"
import { ArrowRightIcon, SparklesIcon, ZapIcon } from "lucide-react"

import { hero, heroHighlights, heroStats } from "@/content/hero"
import { Button } from "@/components/ui/button"
import { Container, Glow, StatItem } from "@/components/common"
import { PhoneFrame } from "@/components/mockups/phone-frame"
import { HeroPhone } from "@/components/mockups/hero-phone"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Glow position="top-left" />
      <Glow
        position="top-right"
        tone="amber"
        className="size-[28rem] opacity-20 dark:opacity-30"
      />

      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent/10 px-3 py-1 text-brand-accent">
            <SparklesIcon className="size-3" />
            <span className="eyebrow">{hero.eyebrow}</span>
          </span>

          <h1 className="text-5xl leading-[0.95] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {hero.title[0]}
            <br />
            <span className="text-brand-accent">{hero.title[1]}</span>
            <br />
            {hero.title[2]}
          </h1>

          <p className="max-w-md text-base text-pretty text-muted-foreground">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="xl" className="rounded-full" asChild>
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.title}
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.title}
              </Link>
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {heroHighlights.map(({ title, icon: Icon }) => (
              <li key={title} className="flex items-center gap-2 text-sm">
                <Icon className="size-3.5 text-brand-accent" />
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <PhoneFrame>
            <HeroPhone />
          </PhoneFrame>

          <div className="absolute top-16 -right-2 hidden items-center gap-2 rounded-lg bg-card px-3 py-2 shadow-lg ring-1 ring-foreground/10 sm:flex lg:-right-6">
            <span className="size-2 rounded-full bg-success" />
            <div className="leading-tight">
              <p className="text-xs font-semibold">Rider Matched</p>
              <p className="text-[0.625rem] text-muted-foreground">
                2 min away
              </p>
            </div>
          </div>

          <div className="absolute bottom-24 -left-2 hidden items-center gap-2 rounded-lg bg-card px-3 py-2 shadow-lg ring-1 ring-foreground/10 sm:flex lg:left-0">
            <ZapIcon className="size-3.5 text-brand-accent" />
            <div className="leading-tight">
              <p className="text-xs font-semibold">₦1,200</p>
              <p className="text-[0.625rem] text-muted-foreground">
                Fare confirmed
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="grid grid-cols-2 gap-8 border-t border-border py-10 sm:grid-cols-4">
        {heroStats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </Container>
    </section>
  )
}
