import { recentAlbums, featuredPlaylists } from "@/lib/music-data"
import { PageHeader } from "@/components/page-header"
import { CardGrid } from "@/components/card-grid"

export default function AlbumBaruPage() {
  return (
    <div className="px-4 pb-8 md:px-6">
      <div className="mt-4">
        <PageHeader
          title="Album Baru"
          subtitle="Rilisan terbaru dari para artis favoritmu, diperbarui setiap minggu."
        />
      </div>

      <CardGrid
        title="Rilisan Minggu Ini"
        items={recentAlbums.map((a, i) => ({
          ...a,
          href: `/playlist/${a.id}`,
          badge: i < 2 ? "Baru" : undefined,
        }))}
      />

      <CardGrid
        title="Akan Datang"
        items={featuredPlaylists.map((p) => ({
          ...p,
          href: `/playlist/${p.id}`,
        }))}
      />
    </div>
  )
}
