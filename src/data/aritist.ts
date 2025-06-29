interface ArtistPreview {
  id: string
  name: string
  type: 'artist'
  images: {
    url: string
    height: number
    width: number
  }[]
}

// 詳細頁（完整資料）
interface ArtistProps extends ArtistPreview {
  external_urls: {
    spotify: string
  }
  followers: {
    href: null
    total: number
  }
  genres: string[]
  popularity: number
  href: string
}

export const mockArtists: ArtistProps[] = [
  {
    id: '1',
    name: 'Culenasm',
    type: 'artist',
    external_urls: {
      spotify: 'https://open.spotify.com/artist/1',
    },
    followers: {
      href: null,
      total: 10432,
    },
    genres: ['Indie Rock', 'J-Rock'],
    images: [
      {
        url: 'https://example.com/images/culenasm_640.jpg',
        height: 640,
        width: 640,
      },
      {
        url: 'https://example.com/images/culenasm_300.jpg',
        height: 300,
        width: 300,
      },
    ],
    popularity: 75,
    href: 'https://api.spotify.com/v1/artists/1',
  },
  {
    id: '2',
    name: 'RADWIMPS',
    type: 'artist',
    external_urls: {
      spotify: 'https://open.spotify.com/artist/2',
    },
    followers: {
      href: null,
      total: 1980000,
    },
    genres: ['Alternative Rock', 'Japanese Rock'],
    images: [
      {
        url: 'https://example.com/images/radwimps_640.jpg',
        height: 640,
        width: 640,
      },
      {
        url: 'https://example.com/images/radwimps_300.jpg',
        height: 300,
        width: 300,
      },
    ],
    popularity: 90,
    href: 'https://api.spotify.com/v1/artists/2',
  },
  {
    id: '3',
    name: 'ONE OK ROCK',
    type: 'artist',
    external_urls: {
      spotify: 'https://open.spotify.com/artist/3',
    },
    followers: {
      href: null,
      total: 1500000,
    },
    genres: ['Japanese Rock', 'Post-Hardcore'],
    images: [
      {
        url: 'https://example.com/images/oneokrock_640.jpg',
        height: 640,
        width: 640,
      },
      {
        url: 'https://example.com/images/oneokrock_300.jpg',
        height: 300,
        width: 300,
      },
    ],
    popularity: 88,
    href: 'https://api.spotify.com/v1/artists/3',
  },
]
