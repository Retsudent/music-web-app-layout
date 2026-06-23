export type Track = {
  id: string
  title: string
  artist: string
  album: string
  cover: string
  duration: string
  plays: string
}

export type Playlist = {
  id: string
  title: string
  description: string
  cover: string
}

export type Podcast = {
  id: string
  title: string
  host: string
  description: string
  cover: string
  episodes: number
}

export type RadioStation = {
  id: string
  title: string
  description: string
  cover: string
  listeners: string
}

export type Genre = {
  id: string
  name: string
  cover: string
  color: string
}

export type Artist = {
  id: string
  name: string
  cover: string
  followers: string
}

export const featuredPlaylists: Playlist[] = [
  {
    id: "pl-1",
    title: "Senja di Kota",
    description: "Lagu santai untuk menemani sore harimu",
    cover: "/albums/album-2.png",
  },
  {
    id: "pl-2",
    title: "Fokus Mendalam",
    description: "Instrumental tanpa lirik untuk konsentrasi",
    cover: "/albums/album-4.png",
  },
  {
    id: "pl-3",
    title: "Jiwa & Soul",
    description: "Suara emas para diva sepanjang masa",
    cover: "/albums/album-5.png",
  },
  {
    id: "pl-4",
    title: "Pagi Cerah",
    description: "Mulai harimu dengan nada positif",
    cover: "/albums/album-3.png",
  },
  {
    id: "pl-5",
    title: "Beat Jalanan",
    description: "Hip hop dan groove paling segar minggu ini",
    cover: "/albums/album-6.png",
  },
  {
    id: "pl-6",
    title: "Lampu Sorot",
    description: "Vokal penuh emosi di bawah sorot panggung",
    cover: "/albums/album-1.png",
  },
]

export const popularTracks: Track[] = [
  {
    id: "tr-1",
    title: "Cahaya Terakhir",
    artist: "Maya Anindita",
    album: "Sorot",
    cover: "/albums/album-1.png",
    duration: "3:42",
    plays: "12.4 jt",
  },
  {
    id: "tr-2",
    title: "Neon Mimpi",
    artist: "Sintala",
    album: "Kota Malam",
    cover: "/albums/album-2.png",
    duration: "4:08",
    plays: "8.9 jt",
  },
  {
    id: "tr-3",
    title: "Jalan Pulang",
    artist: "Arka & Rumi",
    album: "Padang Senja",
    cover: "/albums/album-3.png",
    duration: "3:15",
    plays: "21.7 jt",
  },
  {
    id: "tr-4",
    title: "Frekuensi",
    artist: "Voltase",
    album: "Analog",
    cover: "/albums/album-4.png",
    duration: "5:01",
    plays: "5.2 jt",
  },
  {
    id: "tr-5",
    title: "Bisikan Asap",
    artist: "Laras Wening",
    album: "Sorot",
    cover: "/albums/album-5.png",
    duration: "4:33",
    plays: "9.6 jt",
  },
  {
    id: "tr-6",
    title: "Cat Tumpah",
    artist: "Gana",
    album: "Warna Jalanan",
    cover: "/albums/album-6.png",
    duration: "2:58",
    plays: "15.1 jt",
  },
  {
    id: "tr-7",
    title: "Langit Sore",
    artist: "Arka & Rumi",
    album: "Padang Senja",
    cover: "/albums/album-3.png",
    duration: "3:51",
    plays: "7.3 jt",
  },
  {
    id: "tr-8",
    title: "Sinyal Hilang",
    artist: "Voltase",
    album: "Analog",
    cover: "/albums/album-4.png",
    duration: "4:20",
    plays: "4.1 jt",
  },
]

export const recentAlbums: Playlist[] = [
  {
    id: "al-1",
    title: "Sorot",
    description: "Maya Anindita",
    cover: "/albums/album-1.png",
  },
  {
    id: "al-2",
    title: "Kota Malam",
    description: "Sintala",
    cover: "/albums/album-2.png",
  },
  {
    id: "al-3",
    title: "Padang Senja",
    description: "Arka & Rumi",
    cover: "/albums/album-3.png",
  },
  {
    id: "al-4",
    title: "Analog",
    description: "Voltase",
    cover: "/albums/album-4.png",
  },
  {
    id: "al-5",
    title: "Warna Jalanan",
    description: "Gana",
    cover: "/albums/album-6.png",
  },
  {
    id: "al-6",
    title: "Asap & Madu",
    description: "Laras Wening",
    cover: "/albums/album-5.png",
  },
]

export const podcasts: Podcast[] = [
  {
    id: "pc-1",
    title: "Obrolan Tengah Malam",
    host: "Dimas & Sari",
    description: "Diskusi santai seputar kehidupan, karier, dan hubungan.",
    cover: "/podcasts/podcast-1.png",
    episodes: 142,
  },
  {
    id: "pc-2",
    title: "Bisnis Tanpa Batas",
    host: "Reza Pratama",
    description: "Wawasan startup, teknologi, dan strategi bertumbuh.",
    cover: "/podcasts/podcast-2.png",
    episodes: 88,
  },
  {
    id: "pc-3",
    title: "Jejak Gelap",
    host: "Nadia Hartono",
    description: "Kisah kriminal nyata yang menegangkan setiap pekan.",
    cover: "/podcasts/podcast-3.png",
    episodes: 56,
  },
  {
    id: "pc-4",
    title: "Tenang Sejenak",
    host: "Studio Hening",
    description: "Meditasi terpandu dan cerita pengantar tidur.",
    cover: "/podcasts/podcast-4.png",
    episodes: 210,
  },
]

export const radioStations: RadioStation[] = [
  {
    id: "rd-1",
    title: "Radio Pop Indonesia",
    description: "Hits pop lokal sepanjang hari",
    cover: "/albums/album-1.png",
    listeners: "32 rb",
  },
  {
    id: "rd-2",
    title: "Lo-Fi Santai",
    description: "Beat lembut untuk belajar dan kerja",
    cover: "/albums/album-4.png",
    listeners: "58 rb",
  },
  {
    id: "rd-3",
    title: "Jazz Malam",
    description: "Nada jazz hangat menemani malammu",
    cover: "/albums/album-5.png",
    listeners: "14 rb",
  },
  {
    id: "rd-4",
    title: "Beat Elektronik",
    description: "Energi EDM dan house non-stop",
    cover: "/albums/album-2.png",
    listeners: "41 rb",
  },
  {
    id: "rd-5",
    title: "Akustik Senja",
    description: "Petikan gitar dan vokal lembut",
    cover: "/albums/album-3.png",
    listeners: "23 rb",
  },
  {
    id: "rd-6",
    title: "Groove Jalanan",
    description: "Hip hop dan R&B pilihan",
    cover: "/albums/album-6.png",
    listeners: "37 rb",
  },
]

export const genres: Genre[] = [
  { id: "gn-1", name: "Pop", cover: "/albums/album-1.png", color: "oklch(0.68 0.2 38)" },
  { id: "gn-2", name: "Elektronik", cover: "/albums/album-2.png", color: "oklch(0.62 0.12 200)" },
  { id: "gn-3", name: "Indie & Folk", cover: "/albums/album-3.png", color: "oklch(0.7 0.12 80)" },
  { id: "gn-4", name: "Rock", cover: "/albums/album-4.png", color: "oklch(0.55 0.18 25)" },
  { id: "gn-5", name: "Jazz & Soul", cover: "/albums/album-5.png", color: "oklch(0.5 0.1 320)" },
  { id: "gn-6", name: "Hip Hop", cover: "/albums/album-6.png", color: "oklch(0.6 0.15 50)" },
  { id: "gn-7", name: "Dangdut", cover: "/albums/album-2.png", color: "oklch(0.65 0.16 150)" },
  { id: "gn-8", name: "Klasik", cover: "/albums/album-4.png", color: "oklch(0.55 0.08 260)" },
]

export const artists: Artist[] = [
  { id: "ar-1", name: "Maya Anindita", cover: "/albums/album-1.png", followers: "2.1 jt" },
  { id: "ar-2", name: "Sintala", cover: "/albums/album-2.png", followers: "1.4 jt" },
  { id: "ar-3", name: "Arka & Rumi", cover: "/albums/album-3.png", followers: "3.8 jt" },
  { id: "ar-4", name: "Voltase", cover: "/albums/album-4.png", followers: "890 rb" },
  { id: "ar-5", name: "Laras Wening", cover: "/albums/album-5.png", followers: "1.7 jt" },
  { id: "ar-6", name: "Gana", cover: "/albums/album-6.png", followers: "2.6 jt" },
]

export const userPlaylistData: Playlist[] = [
  {
    id: "up-liked",
    title: "Lagu yang Disukai",
    description: "248 lagu",
    cover: "/albums/album-1.png",
  },
  {
    id: "up-1",
    title: "Mix Harian 1",
    description: "Dibuat untukmu oleh Resonance",
    cover: "/albums/album-2.png",
  },
  {
    id: "up-2",
    title: "Akustik Sore",
    description: "32 lagu",
    cover: "/albums/album-3.png",
  },
  {
    id: "up-3",
    title: "Lari Pagi",
    description: "48 lagu",
    cover: "/albums/album-6.png",
  },
  {
    id: "up-4",
    title: "Tidur Nyenyak",
    description: "60 lagu",
    cover: "/albums/album-4.png",
  },
  {
    id: "up-5",
    title: "Throwback 2000-an",
    description: "75 lagu",
    cover: "/albums/album-5.png",
  },
]

export const allPlaylists: Playlist[] = [
  ...featuredPlaylists,
  ...recentAlbums,
  ...userPlaylistData,
]

export function getPlaylistById(id: string): Playlist | undefined {
  return allPlaylists.find((p) => p.id === id)
}

export function getTrackById(id: string): Track | undefined {
  return popularTracks.find((t) => t.id === id)
}

export type LyricLine = {
  time: number // detik
  text: string
}

// Lirik bersinkron waktu (placeholder). Kunci = id lagu.
export const lyricsByTrack: Record<string, LyricLine[]> = {
  "tr-1": [
    { time: 0, text: "Cahaya terakhir di ujung senja" },
    { time: 8, text: "Memeluk langit yang mulai lelah" },
    { time: 16, text: "Aku berdiri di antara bayang" },
    { time: 24, text: "Mencari arah yang pernah hilang" },
    { time: 33, text: "Dan kuberjanji takkan menyerah" },
    { time: 41, text: "Meski malam datang menggoda" },
    { time: 49, text: "Cahaya terakhir, tetaplah menyala" },
    { time: 58, text: "Sampai pagi membuka mata" },
    { time: 67, text: "Di setiap luka ada cerita" },
    { time: 75, text: "Yang mengajarkan arti percaya" },
    { time: 84, text: "Kupejamkan mata, kudengar suara" },
    { time: 92, text: "Memanggil pulang ke rumah jiwa" },
    { time: 101, text: "Cahaya terakhir, jangan kau padam" },
    { time: 110, text: "Temani aku melewati kelam" },
    { time: 119, text: "Sampai esok kembali bersinar" },
    { time: 128, text: "Dan semua mimpi jadi nyata" },
  ],
}

export function getLyrics(trackId: string): LyricLine[] {
  return lyricsByTrack[trackId] ?? lyricsByTrack["tr-1"]
}

// Ubah durasi "m:ss" menjadi total detik
export function durationToSeconds(duration: string): number {
  const [m, s] = duration.split(":").map(Number)
  return (m || 0) * 60 + (s || 0)
}
