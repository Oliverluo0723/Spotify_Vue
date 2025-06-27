import listImg from '@/assets/e5.jpg'

interface ListProps {
  id: number
  name: string
  role: string
  avatar: string
}

export const libraryList: ListProps[] = [
  {
    id: 101,
    name: 'e5',
    role: '藝人',
    avatar: listImg,
  },
  {
    id: 102,
    name: 'ivy',
    role: '藝人',
    avatar: listImg,
  },
  {
    id: 103,
    name: 'Lorem',
    role: '播放清單',
    avatar: listImg,
  },
  {
    id: 104,
    name: 'Reol',
    role: '藝人',
    avatar: listImg,
  },
  {
    id: 105,
    name: 'Reol',
    role: '藝人',
    avatar: listImg,
  },
  {
    id: 106,
    name: 'Reol',
    role: '藝人',
    avatar: listImg,
  },
]

interface PopularProp {
  id: number
  songImg: string
  songName: string
  playCount: number
  isAddedToPlaylist: boolean
  duration_ms: string
}

export const PopularList: PopularProp[] = [
  {
    id: 1,
    songImg: 'https://example.com/epilogue_made.jpg',
    songName: 'エピローグメイド',
    playCount: 153000,
    isAddedToPlaylist: true,
    duration_ms: '240000',
  },
  {
    id: 2,
    songImg: 'https://example.com/8月31日.jpg',
    songName: '8月31日',
    playCount: 210000,
    isAddedToPlaylist: false,
    duration_ms: '195000',
  },
  {
    id: 3,
    songImg: 'https://example.com/petal.jpg',
    songName: 'ペタル',
    playCount: 170000,
    isAddedToPlaylist: true,
    duration_ms: '215000',
  },
  {
    id: 4,
    songImg: 'https://example.com/drown_at_night.jpg',
    songName: '夜に溺れて',
    playCount: 142000,
    isAddedToPlaylist: false,
    duration_ms: '230000',
  },
  {
    id: 5,
    songImg: 'https://example.com/goodbye_goodnight.jpg',
    songName: 'グッバイ・グッドナイト',
    playCount: 185000,
    isAddedToPlaylist: true,
    duration_ms: '205000',
  },
  {
    id: 6,
    songImg: 'https://example.com/ヘルシンキの夢.jpg',
    songName: 'ヘルシンキの夢',
    playCount: 98000,
    isAddedToPlaylist: false,
    duration_ms: '225000',
  },
  {
    id: 7,
    songImg: 'https://example.com/さよならを言えたかな.jpg',
    songName: 'さよならを言えたかな',
    playCount: 120000,
    isAddedToPlaylist: true,
    duration_ms: '200000',
  },
  {
    id: 8,
    songImg: 'https://example.com/病花.jpg',
    songName: '病花',
    playCount: 109000,
    isAddedToPlaylist: false,
    duration_ms: '210000',
  },
]
