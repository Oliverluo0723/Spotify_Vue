// config
import { instance, accessInstance } from '@/api/config'
// type
import type { ArtistProps } from '@/types/aritist'
import type { SpotifyTrack } from '@/types/track'

const API_ARTISTS = '/artists'

// 獲取單個藝人
export async function getArtists(id: string = '5UOj6C1InE5WTmBXNuemt4'): Promise<ArtistProps> {
  const res = await accessInstance.get(`${API_ARTISTS}/${id}`)
  return res.data
}

// 獲取多個藝人 最多50筆
export async function getSeveralArtists(ids: string[]): Promise<ArtistProps[]> {
  const res = await accessInstance.get(`${API_ARTISTS}`, {
    params: {
      ids: ids.join(','),
    },
  })
  //   console.table(res.data.artists)
  return res.data.artists
}

// 獲取藝人專輯
export async function getArtistsAlbums(id: string = '5UOj6C1InE5WTmBXNuemt4') {
  const res = await accessInstance.get(`${API_ARTISTS}/${id}`)
  console.dir(res.data)

  return res.data
}

// 獲取藝人熱門曲目
export async function getArtistsTopTracks(
  id: string = '5UOj6C1InE5WTmBXNuemt4',
): Promise<SpotifyTrack[]> {
  const res = await accessInstance.get(`${API_ARTISTS}/${id}/top-tracks`)

  return res.data.tracks
}
