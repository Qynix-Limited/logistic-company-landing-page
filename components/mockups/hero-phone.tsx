import {
  ClockIcon,
  HistoryIcon,
  HomeIcon,
  PlusIcon,
  UserIcon,
  WalletIcon,
} from "lucide-react"

const quickActions = [
  { label: "New", icon: PlusIcon },
  { label: "History", icon: HistoryIcon },
  { label: "Wallet", icon: WalletIcon },
]

const tabs = [
  { label: "Home", icon: HomeIcon },
  { label: "New", icon: PlusIcon },
  { label: "History", icon: ClockIcon },
  { label: "Wallet", icon: WalletIcon },
  { label: "Profile", icon: UserIcon },
]

export function HeroPhone() {
  return (
    <div className="flex flex-col gap-3 px-3 pt-9 pb-3 text-[0.5rem]">
      <div className="flex items-center justify-between px-1 text-[0.5rem] font-medium text-neutral-500">
        <span>9:41</span>
        <span className="h-2 w-5 rounded-sm bg-neutral-300" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-neutral-400">Good morning</p>
          <p className="text-[0.6875rem] font-semibold">Chukwuemeka 👋</p>
        </div>
        <span className="grid size-6 place-items-center rounded-full bg-brand-600 text-[0.5rem] font-semibold text-white">
          CE
        </span>
      </div>

      <div className="flex flex-col gap-2 rounded-xl bg-brand-600 p-2.5 text-white">
        <p className="text-[0.5rem] tracking-wider opacity-80">
          ACTIVE DELIVERY
        </p>
        <p className="text-[0.6875rem] font-semibold">Yaba → Victoria Island</p>
        <div className="h-1 overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-3/5 rounded-full bg-white" />
        </div>
        <p className="text-[0.5rem] opacity-80">
          ETA 8 min · Rider: Adebayo K.
        </p>
      </div>

      <div>
        <p className="mb-1.5 text-[0.5rem] tracking-wider text-neutral-400">
          QUICK ACTIONS
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          {quickActions.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 rounded-lg bg-neutral-100 py-2"
            >
              <Icon className="size-3 text-brand-600" />
              <span className="text-[0.5rem] text-neutral-500">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-neutral-100 pt-2">
        {tabs.map(({ label, icon: Icon }, i) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <Icon
              className={
                i === 1 ? "size-3 text-brand-600" : "size-3 text-neutral-300"
              }
            />
            <span className="text-[0.4375rem] text-neutral-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
