import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { merchantFeatures, merchants } from "@/content/merchants"
import { Eyebrow, FeatureCard, Section } from "@/components/common"
import { Button } from "@/components/ui/button"

/**
 * The business pitch, and the only place on the marketing site that sends
 * someone into the console.
 *
 * The CTA is an outbound link rather than a form: registration creates an
 * account and files a merchant application, both of which belong to the
 * console app that owns auth and sessions. Duplicating that here would mean
 * two implementations of the same signup drifting apart.
 */
export function Merchants() {
  return (
    <Section id="business" className="bg-muted/30">
      <div className="flex flex-col gap-12">
        <div className="flex max-w-2xl flex-col gap-6">
          <Eyebrow>{merchants.eyebrow}</Eyebrow>
          <h2 className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {merchants.title[0]}
            <br />
            {merchants.title[1]}{" "}
            <span className="text-brand-accent">{merchants.title[2]}</span>
          </h2>
          <p className="text-base text-pretty text-muted-foreground">
            {merchants.description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="xl" className="rounded-full" asChild>
              <Link href={merchants.ctaHref}>
                {merchants.cta}
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button size="xl" variant="ghost" className="rounded-full" asChild>
              <Link href={merchants.signInHref}>Sign in to your console</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">{merchants.ctaNote}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {merchantFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </Section>
  )
}
