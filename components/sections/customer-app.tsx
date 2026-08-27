import { customerApp, customerFeatures } from "@/content/customer-app"
import { Eyebrow, FeatureCard, Section } from "@/components/common"

export function CustomerApp() {
  return (
    <Section id="features">
      <div className="grid items-end gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Eyebrow>{customerApp.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {customerApp.title}{" "}
            <span className="text-brand-accent">{customerApp.titleAccent}</span>{" "}
            {customerApp.titleRest}
          </h2>
        </div>
        <p className="text-base text-pretty text-muted-foreground">
          {customerApp.description}
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {customerFeatures.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            className={index < 2 ? "bg-brand-accent/5" : undefined}
          />
        ))}
      </div>
    </Section>
  )
}
