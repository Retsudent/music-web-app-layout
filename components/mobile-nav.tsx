"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Library, Radio } from "lucide-react"
import { cn } from "@/lib/utils"

const items = [
  { label: "Beranda", icon: Home, href: "/" },
  { label: "Cari", icon: Search, href: "/cari" },
  { label: "Radio", icon: Radio, href: "/radio" },
  { label: "Koleksi", icon: Library, href: "/koleksi" },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-around border-t border-border bg-sidebar px-2 py-2 md:hidden">
      {items.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 rounded-lg py-1 text-[11px] font-medium transition-colors",
              active
                ? "text-sidebar-primary"
                : "text-muted-foreground hover:text-sidebar-foreground",
            )}
          >
            <item.icon className="size-5" />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
