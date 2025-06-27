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
