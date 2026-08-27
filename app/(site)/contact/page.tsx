import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import { contactChannels, contactHours, contactPage } from "@/content/contact"
import { Card } from "@/components/ui/card"
import { Container, IconBadge, PageHeader, Section } from "@/components/common"
import { ContactForm } from "@/components/sections/contact-form"

export const metadata: Metadata = {
  title: "Contact us",
  description: contactPage.description,
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        titleAccent={contactPage.titleAccent}
        description={contactPage.description}
      />

      <Section className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((channel) => (
            <Link
              key={channel.title}
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="group flex flex-col gap-3 rounded-xl border border-border p-5 transition-colors hover:border-brand-accent/40"
            >
              <IconBadge icon={channel.icon} />
              <h2 className="text-sm font-semibold">{channel.title}</h2>
              <p className="flex-1 text-sm text-pretty text-muted-foreground">
                {channel.description}
              </p>
              <span className="flex items-center gap-1 text-sm font-medium text-brand-accent">
                {channel.action}
                <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Container className="pb-20 sm:pb-24 lg:pb-32">
        <Card className="gap-0 p-0 lg:grid lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-6 p-8 lg:p-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Send us a message
              </h2>
              <p className="text-sm text-pretty text-muted-foreground">
                Fill this in and the right person on our team picks it up.
              </p>
            </div>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6 border-t border-border bg-muted/30 p-8 lg:border-t-0 lg:border-l lg:p-10">
            <h2 className="text-sm font-semibold">When you will hear back</h2>
            <dl className="flex flex-col gap-5">
              {contactHours.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt className="eyebrow text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-auto border-t border-border pt-6">
              <p className="text-sm text-pretty text-muted-foreground">
                Chasing a delivery that is already on the road? WhatsApp is the
                fastest route — our support team has live order access there.
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </>
  )
}
