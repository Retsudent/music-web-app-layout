"use client"

import { useState } from "react"
import {
  Home,
  Search,
  Library,
  Heart,
  Plus,
  ListMusic,
  Radio,
  Mic2,
  Disc3,
} from "lucide-react"
import { cn } from "@/lib/utils"

const mainNav = [
  { label: "Beranda", icon: Home, active: true },
  { label: "Cari", icon: Search, active: false },
  { label: "Koleksimu", icon: Library, active: false },
]

const discoverNav = [
  { label: "Radio", icon: Radio },
  { label: "Podcast", icon: Mic2 },
  { label: "Album Baru", icon: Disc3 },
]

const userPlaylists = [
  "Lagu yang Disukai",
  "Mix Harian 1",
  "Akustik Sore",
  "Lari Pagi",
  "Tidur Nyenyak",
  "Throwback 2000-an",
]

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Beranda")

  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col gap-2 bg-sidebar p-3 text-sidebar-foreground">
      <div className="flex items-center gap-2 px-3 py-4">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Disc3 className="size-5" />
        </div>
        <span className="font-heading text-xl font-bold tracking-tight">
          Resonance
        </span>
      </div>

      <nav className="flex flex-col gap-1">
        {mainNav.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={cn(
              "flex items-center gap-4 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              activeItem === item.label
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-muted-foreground hover:text-sidebar-foreground",
            )}
          >
            <item.icon className="size-5" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-2 flex flex-col gap-1">
        <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Jelajahi
        </p>
        {discoverNav.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={cn(
              "flex items-center gap-4 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              activeItem === item.label
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-muted-foreground hover:text-sidebar-foreground",
            )}
          >
            <item.icon className="size-5" />
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between px-3">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <ListMusic className="size-4" />
          Playlist
        </span>
        <button
          className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
          aria-label="Buat playlist baru"
        >
          <Plus className="size-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-0.5">
          <li>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-sidebar-foreground">
              <span className="flex size-8 items-center justify-center rounded bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Heart className="size-4" />
              </span>
              <span className="truncate font-medium">Lagu yang Disukai</span>
            </button>
          </li>
          {userPlaylists.slice(1).map((name) => (
            <li key={name}>
              <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-sidebar-foreground">
                <span className="flex size-8 items-center justify-center rounded bg-sidebar-accent">
                  <ListMusic className="size-4" />
                </span>
                <span className="truncate font-medium">{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
