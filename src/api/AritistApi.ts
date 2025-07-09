// config
import { instance, accessInstance } from '@/api/config'
// type
import type { ArtistProps } from '@/types/aritist'
import type { SpotifyTrack } from '@/types/track'

const API_ARTISTS = '/artists'

// 獲取單個藝人
export async function getArtists(
  id: string = '5UOj6C1InE5WTmBXNuemt4',
): Promise<ArtistProps | null> {
  try {
    const res = await accessInstance.get(`${API_ARTISTS}/${id}`)
    return res.data
  } catch (err) {
    console.error('獲取單個藝人失敗', err)
    return null
  }
}

// 獲取多個藝人 最多50筆
export async function getSeveralArtists(ids: string[]): Promise<ArtistProps[] | null> {
  try {
    const res = await accessInstance.get(`${API_ARTISTS}`, {
      params: {
        ids: ids.join(','),
      },
    })
    //   console.table(res.data.artists)
    return res.data.artists
  } catch (err) {
    console.error('獲取多個藝人失敗', err)
    return null
  }
}

// 獲取藝人專輯
export async function getArtistsAlbums(id: string = '5UOj6C1InE5WTmBXNuemt4') {
  try {
    const res = await accessInstance.get(`${API_ARTISTS}/${id}`)
    console.dir(res.data)
    return res.data
  } catch (err) {
    console.error('獲取藝人專輯失敗', err)
    return null
  }
}

// 獲取藝人熱門曲目
export async function getArtistsTopTracks(
  id: string = '5UOj6C1InE5WTmBXNuemt4',
): Promise<SpotifyTrack[] | null> {
  try {
    const res = await accessInstance.get(`${API_ARTISTS}/${id}/top-tracks`)
    return res.data.tracks
  } catch (err) {
    console.error('獲取藝人熱門曲目失敗', err)
    return null
  }
}

// 獲取關於此藝術家相關藝術家信息
export async function getArtistsRelatedArtists(id: string): Promise<ArtistProps[] | null> {
  try {
    const res = await accessInstance.get(`${API_ARTISTS}/${id}/related-artists`)
    return res.data
  } catch (err) {
    console.error('獲取關於此藝術家相關藝術家信息失敗', err)
    return null
  }
}
