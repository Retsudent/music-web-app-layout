"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Search, Bell, User } from "lucide-react"

export function TopBar() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background/80 px-4 py-3 backdrop-blur-md md:px-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => router.back()}
          className="hidden size-8 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:text-foreground md:flex"
          aria-label="Kembali"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={() => router.forward()}
          className="hidden size-8 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:text-foreground md:flex"
          aria-label="Maju"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <button
        onClick={() => router.push("/cari")}
        className="relative hidden max-w-md flex-1 items-center md:flex"
        aria-label="Buka pencarian"
      >
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <span className="w-full rounded-full border border-border bg-card py-2 pl-10 pr-4 text-left text-sm text-muted-foreground transition-colors hover:border-primary">
          Cari lagu, artis, atau album
        </span>
      </button>

      <div className="flex flex-1 items-center justify-end gap-2 md:flex-none">
        <button
          className="flex size-9 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Notifikasi"
        >
          <Bell className="size-5" />
        </button>
        <button className="flex items-center gap-2 rounded-full bg-card py-1 pl-1 pr-3 transition-colors hover:bg-secondary">
          <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <User className="size-4" />
          </span>
          <span className="hidden text-sm font-medium sm:inline">Rama</span>
        </button>
      </div>
    </header>
  )
}
