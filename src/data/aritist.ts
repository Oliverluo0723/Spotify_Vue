import e5 from '@/assets/e5.jpg'
import culenasm from '@/assets/culenasm.jpg'
import hitjibungaku from '@/assets/羊文學.jpg'
import hakubi from '@/assets/Hakubi.jpg'
import asaki from '@/assets/4s4ki.jpg'

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
export interface ArtistProps extends ArtistPreview {
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
        url: culenasm,
        height: 640,
        width: 640,
      },
      {
        url: culenasm,
        height: 300,
        width: 300,
      },
    ],
    popularity: 75,
    href: 'https://api.spotify.com/v1/artists/1',
  },
  {
    id: '2',
    name: '羊文學',
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
        url: hitjibungaku,
        height: 640,
        width: 640,
      },
      {
        url: hitjibungaku,
        height: 300,
        width: 300,
      },
    ],
    popularity: 90,
    href: 'https://api.spotify.com/v1/artists/2',
  },
  {
    id: '3',
    name: 'e5',
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
        url: e5,
        height: 640,
        width: 640,
      },
      {
        url: e5,
        height: 300,
        width: 300,
      },
    ],
    popularity: 88,
    href: 'https://api.spotify.com/v1/artists/3',
  },
  {
    id: '4',
    name: 'Hakubi',
    type: 'artist',
    external_urls: {
      spotify: 'https://open.spotify.com/artist/4',
    },
    followers: {
      href: null,
      total: 320000,
    },
    genres: ['Indie Rock', 'Emo', 'J-Rock'],
    images: [
      {
        url: hakubi,
        height: 640,
        width: 640,
      },
      {
        url: hakubi,
        height: 300,
        width: 300,
      },
    ],
    popularity: 70,
    href: 'https://api.spotify.com/v1/artists/4',
  },
  // 新增 4s4ki
  {
    id: '5',
    name: '4s4ki',
    type: 'artist',
    external_urls: {
      spotify: 'https://open.spotify.com/artist/5',
    },
    followers: {
      href: null,
      total: 500000,
    },
    genres: ['Hyperpop', 'Electropop', 'J-Pop'],
    images: [
      {
        url: asaki,
        height: 640,
        width: 640,
      },
      {
        url: asaki,
        height: 300,
        width: 300,
      },
    ],
    popularity: 85,
    href: 'https://api.spotify.com/v1/artists/5',
  },
]
