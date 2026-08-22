import { cn } from "@/lib/utils"
import { Eyebrow } from "@/components/common/eyebrow"

interface SectionHeadingProps extends Omit<
  React.ComponentProps<"div">,
  "title"
> {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  as?: "h1" | "h2" | "h3"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
      {...props}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="text-base text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
