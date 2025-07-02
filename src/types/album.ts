export interface SpotifyImage {
  url: string
  height: number
  width: number
}

export interface SpotifyExternalUrls {
  spotify: string
}

export interface SpotifyCopyright {
  text: string
  type: string
}

export interface SpotifyExternalIds {
  upc?: string
  [key: string]: string | undefined
}

export interface SpotifyArtistSimple {
  external_urls: SpotifyExternalUrls
  href: string
  id: string
  name: string
  type: 'artist' // 固定為 'artist'
  uri: string
}

export interface SpotifyTrackSimple {
  artists: SpotifyArtistSimple[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_urls: SpotifyExternalUrls
  href: string
  id: string
  name: string
  preview_url: string | null
  track_number: number
  type: string
  uri: string
  is_local: boolean
}

export interface SpotifyTracks {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items: SpotifyTrackSimple[]
}

export interface SpotifyAlbum {
  album_type: 'album' | 'single' | 'compilation'
  total_tracks: number
  available_markets: string[]
  external_urls: SpotifyExternalUrls
  href: string
  id: string
  images: SpotifyImage[]
  name: string
  release_date: string
  release_date_precision: string
  type: string
  uri: string
  artists: SpotifyArtistSimple[]
  tracks: SpotifyTracks
  copyrights: SpotifyCopyright[]
  external_ids: SpotifyExternalIds
  genres: string[]
  label: string
  popularity: number
}

// 假資料
export const mockAlbum: SpotifyAlbum = {
  album_type: 'album',
  total_tracks: 12,
  available_markets: ['TW', 'JP', 'US', 'GB'],
  external_urls: {
    spotify: 'https://open.spotify.com/album/1ONQrLL5EaVJd34qsM21id',
  },
  href: 'https://api.spotify.com/v1/albums/1ONQrLL5EaVJd34qsM21id?locale=zh-TW',
  id: '1ONQrLL5EaVJd34qsM21id',
  images: [
    {
      url: 'https://i.scdn.co/image/ab67616d0000b2739d6948f49f17ec19a396f73f',
      height: 640,
      width: 640,
    },
    {
      url: 'https://i.scdn.co/image/ab67616d00001e029d6948f49f17ec19a396f73f',
      height: 300,
      width: 300,
    },
    {
      url: 'https://i.scdn.co/image/ab67616d000048519d6948f49f17ec19a396f73f',
      height: 64,
      width: 64,
    },
  ],
  name: 'our hope',
  release_date: '2022-04-20',
  release_date_precision: 'day',
  type: 'album',
  uri: 'spotify:album:1ONQrLL5EaVJd34qsM21id',
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/6S8w5rLsEwjN21jQeRES0n',
      },
      href: 'https://api.spotify.com/v1/artists/6S8w5rLsEwjN21jQeRES0n',
      id: '6S8w5rLsEwjN21jQeRES0n',
      name: '羊文学',
      type: 'artist',
      uri: 'spotify:artist:6S8w5rLsEwjN21jQeRES0n',
    },
  ],
  tracks: {
    href: 'https://api.spotify.com/v1/albums/1ONQrLL5EaVJd34qsM21id/tracks?offset=0&limit=50',
    limit: 50,
    next: null,
    offset: 0,
    previous: null,
    total: 12,
    items: [
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6S8w5rLsEwjN21jQeRES0n',
            },
            href: 'https://api.spotify.com/v1/artists/6S8w5rLsEwjN21jQeRES0n',
            id: '6S8w5rLsEwjN21jQeRES0n',
            name: '羊文学',
            type: 'artist',
            uri: 'spotify:artist:6S8w5rLsEwjN21jQeRES0n',
          },
        ],
        available_markets: ['TW', 'JP', 'US', 'GB'],
        disc_number: 1,
        duration_ms: 270120,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/4D0QKrI7YALNbc1k8gCc91',
        },
        href: 'https://api.spotify.com/v1/tracks/4D0QKrI7YALNbc1k8gCc91',
        id: '4D0QKrI7YALNbc1k8gCc91',
        name: 'hopi',
        preview_url: null,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:4D0QKrI7YALNbc1k8gCc91',
        is_local: false,
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6S8w5rLsEwjN21jQeRES0n',
            },
            href: 'https://api.spotify.com/v1/artists/6S8w5rLsEwjN21jQeRES0n',
            id: '6S8w5rLsEwjN21jQeRES0n',
            name: '羊文学',
            type: 'artist',
            uri: 'spotify:artist:6S8w5rLsEwjN21jQeRES0n',
          },
        ],
        available_markets: ['TW', 'JP', 'US', 'GB'],
        disc_number: 1,
        duration_ms: 351880,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/7Aflm6F9jMApKat1tjvhxT',
        },
        href: 'https://api.spotify.com/v1/tracks/7Aflm6F9jMApKat1tjvhxT',
        id: '7Aflm6F9jMApKat1tjvhxT',
        name: '光るとき',
        preview_url: null,
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:7Aflm6F9jMApKat1tjvhxT',
        is_local: false,
      },
      // ...可再補上更多 tracks
    ],
  },
  copyrights: [
    {
      text: '(P) 2021(6,11),2022(1-5,7-10,12) F.C.L.S.',
      type: 'P',
    },
  ],
  external_ids: {
    upc: '4547366557404',
  },
  genres: [],
  label: 'F.C.L.S.',
  popularity: 53,
}
