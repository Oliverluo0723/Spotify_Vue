export interface ArtistProps {
  external_urls: {
    spotify: string
  }
  followers: {
    href: string | null // 通常是 null
    total: number
  }
  genres: string[]
  href: string
  id: string
  images: {
    url: string
    height: number
    width: number
  }[]
  name: string
  popularity: number
  type: 'artist' // 固定為 'artist'
  uri: string
}
