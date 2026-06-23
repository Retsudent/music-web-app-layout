import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { PlayerBar } from "@/components/player-bar"
import { MobileNav } from "@/components/mobile-nav"

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-background text-foreground">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex flex-1 flex-col overflow-hidden">
          <TopBar />
          <div className="flex-1 overflow-y-auto">{children}</div>
        </main>
      </div>
      <PlayerBar />
      <MobileNav />
    </div>
  )
}
