import {
  AdminPanel,
  CustomerApp,
  Download,
  Hero,
  HowItWorks,
  RiderApp,
} from "@/components/sections"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <CustomerApp />
      <RiderApp />
      <AdminPanel />
      <Download />
    </>
  )
}
