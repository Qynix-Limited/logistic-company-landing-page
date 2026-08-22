import { cn } from "@/lib/utils"

export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("eyebrow text-brand-500", className)} {...props} />
}
