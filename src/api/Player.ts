import { accessInstance } from '@/api/config'
import type { PlaybackState } from '@/types/player'

export async function getPlaybackState(): Promise<PlaybackState | undefined> {
  try {
    const res = await accessInstance.get('/me/player?market=TW&additional_types=track')

    return res.data ?? undefined
  } catch (err) {
    console.error('獲取播放狀態失敗', err)
  }
}
