import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import {
  aboutMilestones,
  aboutPage,
  aboutStats,
  aboutStory,
  aboutTeam,
  aboutValues,
} from "@/content/about"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Container,
  Eyebrow,
  FeatureCard,
  PageHeader,
  Section,
  SectionHeading,
  StatItem,
} from "@/components/common"

export const metadata: Metadata = {
  title: "About us",
  description: aboutPage.description,
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        titleAccent={aboutPage.titleAccent}
        description={aboutPage.description}
      />

      <Container className="grid grid-cols-2 gap-8 border-b border-border py-12 sm:grid-cols-4">
        {aboutStats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </Container>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>{aboutStory.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {aboutStory.title}{" "}
              <span className="text-brand-500">{aboutStory.titleAccent}</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {aboutStory.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base text-pretty text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <SectionHeading
          eyebrow="What we stand for"
          title={
            <>
              Four things we
              <br />
              <span className="text-muted-foreground">
                refuse to trade away.
              </span>
            </>
          }
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((value) => (
            <FeatureCard key={value.title} {...value} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Milestones"
          title={
            <>
              How we got here,
              <br />
              <span className="text-muted-foreground">
                and where we go next.
              </span>
            </>
          }
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutMilestones.map((milestone) => (
            <li key={milestone.year}>
              <Card className="h-full gap-3 p-5">
                <span className="font-mono text-sm font-medium text-brand-500">
                  {milestone.year}
                </span>
                <span className="h-px w-full bg-border" />
                <h3 className="text-sm font-semibold">{milestone.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">
                  {milestone.description}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-muted/30">
        <SectionHeading
          eyebrow="The team"
          title="Small team, short feedback loop."
          description="We run lean and stay close to the merchants and riders who use the product every day."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutTeam.map((member) => (
            <li key={member.name}>
              <Card className="h-full items-center gap-3 p-6 text-center">
                <span className="grid size-12 place-items-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                  {member.initials}
                </span>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Container className="pb-20 sm:pb-24 lg:pb-32">
        <Card className="items-center gap-4 p-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-balance">
            Want to move something today?
          </h2>
          <p className="max-w-md text-pretty text-muted-foreground">
            Download the app, or talk to us about putting your whole store on
            QynixFleet.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/#download">
                Get the app
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </Card>
      </Container>
    </>
  )
}
