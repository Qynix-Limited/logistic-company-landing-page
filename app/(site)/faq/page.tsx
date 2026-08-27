import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { faqCategories, faqPage } from "@/content/faq"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container, IconBadge, PageHeader, Section } from "@/components/common"

export const metadata: Metadata = {
  title: "FAQ",
  description: faqPage.description,
  alternates: { canonical: "/faq" },
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow={faqPage.eyebrow}
        title={faqPage.title}
        titleAccent={faqPage.titleAccent}
        description={faqPage.description}
      >
        <nav className="flex flex-wrap justify-center gap-2 pt-2">
          {faqCategories.map((category) => (
            <Link
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand-accent/50 hover:text-foreground"
            >
              {category.title}
            </Link>
          ))}
        </nav>
      </PageHeader>

      <Section className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-16">
          {faqCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="grid scroll-mt-24 gap-8 lg:grid-cols-[18rem_1fr]"
            >
              <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
                <IconBadge icon={category.icon} />
                <h2 className="text-xl font-bold tracking-tight">
                  {category.title}
                </h2>
                <p className="text-sm text-pretty text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger className="text-left text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-pretty text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </Section>

      <Container className="pb-20 sm:pb-24 lg:pb-32">
        <Card className="items-center gap-4 p-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Still have a question?
          </h2>
          <p className="max-w-md text-pretty text-muted-foreground">
            Send us a message and a real person will get back to you within one
            business day.
          </p>
          <Button size="lg" className="mt-2 rounded-full" asChild>
            <Link href="/contact">
              Contact us
              <ArrowRightIcon />
            </Link>
          </Button>
        </Card>
      </Container>
    </>
  )
}
