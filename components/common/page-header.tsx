import { cn } from "@/lib/utils"
import { Container } from "@/components/common/container"
import { Eyebrow } from "@/components/common/eyebrow"
import { Glow } from "@/components/common/glow"

interface PageHeaderProps extends Omit<
  React.ComponentProps<"section">,
  "title"
> {
  eyebrow: string
  title: string
  titleAccent?: string
  description?: string
}

export function PageHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  className,
  children,
  ...props
}: PageHeaderProps) {
  return (
    <section
      className={cn("relative isolate overflow-hidden border-b", className)}
      {...props}
    >
      <Glow position="top-right" className="opacity-25 dark:opacity-40" />
      <Container className="flex max-w-3xl flex-col items-center gap-5 py-20 text-center sm:py-24 lg:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
          {titleAccent ? (
            <>
              {" "}
              <span className="text-brand-500">{titleAccent}</span>
            </>
          ) : null}
        </h1>
        {description ? (
          <p className="max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  )
}
