import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { MainContent } from "@/components/main-content"
import { PlayerBar } from "@/components/player-bar"

export default function Page() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-background text-foreground">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex flex-1 flex-col overflow-hidden">
          <TopBar />
          <div className="flex-1 overflow-y-auto">
            <MainContent />
          </div>
        </main>
      </div>
      <PlayerBar />
    </div>
  )
}
