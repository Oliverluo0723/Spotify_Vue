import { accessInstance } from '@/api/config'
import axios from 'axios'

// 獲取單首歌的資料
export async function getTrack(id: string) {
  try {
    const res = await accessInstance.get(`/tracks/${id}`)

    return res.data
  } catch (err) {
    console.error('獲取單首歌的資料失敗', err)
    return null
  }
}

// 檢查當前Spotify用戶的“您的音樂”庫中是否已經保存了一個或多個曲目。
export async function getCheckUsersSavedTracks(ids: string | string[]): Promise<boolean[] | null> {
  try {
    const idsParam = Array.isArray(ids) ? ids.join(',') : ids
    const params = new URLSearchParams({ ids: idsParam })

    const res = await accessInstance.get(`/me/tracks/contains?${params.toString()}`)
    return res.data
  } catch (err) {
    console.error(`獲取是否儲存於音樂庫失敗 ids: ${ids}`, err)
    return null
  }
}
