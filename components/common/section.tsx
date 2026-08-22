import { cn } from "@/lib/utils"
import { Container } from "@/components/common/container"

interface SectionProps extends React.ComponentProps<"section"> {
  bleed?: boolean
}

export function Section({
  className,
  children,
  bleed = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-16 py-20 sm:py-24 lg:py-32", className)}
      {...props}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  )
}
