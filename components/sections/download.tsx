import Link from "next/link"

import { adminCard, appCards, download, storeLinks } from "@/content/download"
import { Card } from "@/components/ui/card"
import {
  AvatarStack,
  Eyebrow,
  IconBadge,
  Section,
  StoreButton,
} from "@/components/common"

export function Download() {
  return (
    <Section id="download">
      <Card className="gap-0 p-0 lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-6 p-8 lg:p-12">
          <Eyebrow>{download.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {download.title}
            <br />
            <span className="text-brand-accent">{download.titleAccent}</span>
          </h2>
          <p className="max-w-sm text-base text-pretty text-muted-foreground">
            {download.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {storeLinks.map((store) => (
              <StoreButton key={store.name} {...store} />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <AvatarStack />
            <p className="text-sm text-muted-foreground">
              {download.socialProof}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border p-8 lg:border-t-0 lg:border-l lg:p-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {appCards.map((app) => (
              <AppTile key={app.name} {...app} />
            ))}
          </div>
          <AppTile {...adminCard} showAudience={false} />
        </div>
      </Card>
    </Section>
  )
}

function AppTile({
  name,
  description,
  audience,
  icon,
  href,
  showAudience = true,
}: (typeof appCards)[number] & { showAudience?: boolean }) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-3 rounded-xl border border-border p-5 transition-colors hover:border-brand-accent/40"
    >
      <IconBadge icon={icon} variant="solid" className="bg-primary" />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-pretty text-muted-foreground">
          {description}
        </p>
      </div>
      {showAudience ? (
        <span className="eyebrow text-brand-accent">{audience}</span>
      ) : null}
    </Link>
  )
}
