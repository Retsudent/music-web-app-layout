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
]
