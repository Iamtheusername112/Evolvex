import { Sidebar } from "@/components/dashboard/sidebar"
import { DashboardFooter } from "@/components/dashboard/footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen overflow-hidden relative">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto relative z-10 flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <DashboardFooter />
        </main>
      </div>
    </div>
  )
}

