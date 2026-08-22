"use client"

import { audiences, howItWorks } from "@/content/how-it-works"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Section, SectionHeading, StepCard } from "@/components/common"

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow={howItWorks.eyebrow}
        title={
          <>
            {howItWorks.title}
            <br />
            <span className="text-muted-foreground">
              {howItWorks.titleAccent}
            </span>
          </>
        }
      />

      <Tabs
        defaultValue={audiences[0].id}
        className="mt-10 items-center gap-10"
      >
        <TabsList className="rounded-full">
          {audiences.map((audience) => (
            <TabsTrigger
              key={audience.id}
              value={audience.id}
              className="rounded-full px-5"
            >
              {audience.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {audiences.map((audience) => (
          <TabsContent key={audience.id} value={audience.id} className="w-full">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {audience.steps.map((step, index) => (
                <StepCard key={step.title} index={index} {...step} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  )
}
