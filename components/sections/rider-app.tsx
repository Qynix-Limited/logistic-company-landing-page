import { riderApp, riderFeatures } from "@/content/rider-app"
import { Eyebrow, FeatureListItem, Section } from "@/components/common"
import { EarningsCard } from "@/components/mockups/earnings-card"

export function RiderApp() {
  return (
    <Section id="riders" className="bg-muted/30">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <EarningsCard />

        <div className="flex flex-col gap-6">
          <Eyebrow>{riderApp.eyebrow}</Eyebrow>
          <h2 className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {riderApp.title[0]}
            <br />
            {riderApp.title[1]}{" "}
            <span className="text-brand-500">{riderApp.title[2]}</span>
          </h2>
          <p className="text-base text-pretty text-muted-foreground">
            {riderApp.description}
          </p>
          <ul className="flex flex-col gap-5">
            {riderFeatures.map((feature) => (
              <FeatureListItem key={feature.title} {...feature} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
