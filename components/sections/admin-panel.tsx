import { admin } from "@/content/admin"
import { Section, SectionHeading } from "@/components/common"
import { AdminDashboard } from "@/components/mockups/admin-dashboard"

export function AdminPanel() {
  return (
    <Section id="admin">
      <SectionHeading
        eyebrow={admin.eyebrow}
        title={
          <>
            {admin.title}
            <br />
            <span className="text-muted-foreground">{admin.titleAccent}</span>
          </>
        }
      />
      <AdminDashboard className="mt-12" />
    </Section>
  )
}
