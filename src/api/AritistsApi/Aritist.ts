// config
import { instance } from '@/api/config'
// type
import type { Artist } from '@/types/aritist'

// 獲取單個藝人
export async function getArtists(id: string = '5UOj6C1InE5WTmBXNuemt4'): Promise<Artist> {
  const res = await instance.get(`/artists/${id}`)
  //   console.table(res.data)
  return res.data
}

// 獲取多個藝人 最多50筆
export async function getSeveralArtists(
  ids: string[] = ['5UOj6C1InE5WTmBXNuemt4'],
): Promise<Artist[]> {
  const res = await instance.get('/artists', {
    params: {
      ids: ids.join(','),
    },
  })
  //   console.table(res.data.artists)
  return res.data.artists
}
