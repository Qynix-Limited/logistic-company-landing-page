import {
  AdminPanel,
  CustomerApp,
  Download,
  Hero,
  HowItWorks,
  Merchants,
  RiderApp,
} from "@/components/sections"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <CustomerApp />
      <RiderApp />
      <Merchants />
      <AdminPanel />
      <Download />
    </>
  )
}
