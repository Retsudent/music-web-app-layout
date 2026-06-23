"use client"

import { ChevronLeft, ChevronRight, Search, Bell, User } from "lucide-react"

export function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background/80 px-4 py-3 backdrop-blur-md md:px-6">
      <div className="flex items-center gap-2">
        <button
          className="hidden size-8 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:text-foreground md:flex"
          aria-label="Kembali"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          className="hidden size-8 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:text-foreground md:flex"
          aria-label="Maju"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="relative flex-1 max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Cari lagu, artis, atau album"
          className="w-full rounded-full border border-border bg-card py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex items-center gap-2">
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
