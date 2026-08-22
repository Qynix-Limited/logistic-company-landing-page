import { cn } from "@/lib/utils"

export function PhoneFrame({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative w-[17rem] shrink-0 rounded-[2.25rem] bg-neutral-900 p-2 shadow-2xl ring-1 ring-white/10",
        className
      )}
      {...props}
    >
      <div className="relative overflow-hidden rounded-[1.75rem] bg-white text-neutral-900">
        <div className="absolute top-2 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />
        {children}
      </div>
    </div>
  )
}
