"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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
import { userPlaylistData } from "@/lib/music-data"

const mainNav = [
  { label: "Beranda", icon: Home, href: "/" },
  { label: "Cari", icon: Search, href: "/cari" },
  { label: "Koleksimu", icon: Library, href: "/koleksi" },
]

const discoverNav = [
  { label: "Radio", icon: Radio, href: "/radio" },
  { label: "Podcast", icon: Mic2, href: "/podcast" },
  { label: "Album Baru", icon: Disc3, href: "/album-baru" },
]

function NavLink({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string
  label: string
  icon: typeof Home
  active: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-4 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-primary"
          : "text-muted-foreground hover:text-sidebar-foreground",
      )}
    >
      <Icon className="size-5" />
      {label}
    </Link>
  )
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col gap-2 bg-sidebar p-3 text-sidebar-foreground">
      <Link href="/" className="flex items-center gap-2 px-3 py-4">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Disc3 className="size-5" />
        </div>
        <span className="font-heading text-xl font-bold tracking-tight">
          Resonance
        </span>
      </Link>

      <nav className="flex flex-col gap-1">
        {mainNav.map((item) => (
          <NavLink
            key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={pathname === item.href}
          />
        ))}
      </nav>

      <div className="mt-2 flex flex-col gap-1">
        <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Jelajahi
        </p>
        {discoverNav.map((item) => (
          <NavLink
            key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={pathname === item.href}
          />
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
          {userPlaylistData.map((playlist, index) => (
            <li key={playlist.id}>
              <Link
                href={`/playlist/${playlist.id}`}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === `/playlist/${playlist.id}`
                    ? "text-sidebar-foreground"
                    : "text-muted-foreground hover:text-sidebar-foreground",
                )}
              >
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded",
                    index === 0
                      ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                      : "bg-sidebar-accent",
                  )}
                >
                  {index === 0 ? (
                    <Heart className="size-4" />
                  ) : (
                    <ListMusic className="size-4" />
                  )}
                </span>
                <span className="truncate font-medium">{playlist.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
