import { cn } from "@/lib/utils"

const initials = ["CE", "AK", "OU", "SB"]

export function AvatarStack({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex -space-x-2", className)} {...props}>
      {initials.map((name) => (
        <span
          key={name}
          className="grid size-7 place-items-center rounded-full border-2 border-background bg-brand-600 text-[0.625rem] font-semibold text-white"
        >
          {name}
        </span>
      ))}
    </div>
  )
}
