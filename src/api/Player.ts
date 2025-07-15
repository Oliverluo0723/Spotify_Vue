import { accessInstance } from '@/api/config'
import type { PlaybackState } from '@/types/player'
import type {} from '@/types/track'

// 獲取播放狀態
export async function getPlaybackState(): Promise<PlaybackState | undefined> {
  try {
    const res = await accessInstance.get('/me/player?market=TW&additional_types=track')

    if (res === undefined) {
      console.log('沒在播放')
    }

    return res.data ?? undefined
  } catch (err) {
    console.error('獲取播放狀態失敗', err)
  }
}

// 71c510fa67c0356f7e95c8c9a59aef1a94b7d7be
export async function startResumePlayback() {
  try {
    await accessInstance.put(
      '/me/player/play',
      {
        uris: ['spotify:track:4ubUjstZ3bGMt0FIwhAYFf'],
        // offset: {
        //   position: 5, // 專輯的第 6 首 (索引從 0 開始)
        // },
        position_ms: 0, // 從這首歌的開頭開始播放
      },
      {
        params: {
          device_id: '71c510fa67c0356f7e95c8c9a59aef1a94b7d7be', // (可選) 指定要在哪個裝置播放
        },
      },
    )

    console.log('開始播放')
  } catch (err) {
    console.error('播放失敗', err)
  }
}

// 暫停播放
export async function pausePlayback(): Promise<void> {
  try {
    await accessInstance.put('/me/player/pause')
  } catch (err) {
    console.error(err)
  }
}

// 獲取目前播放
export async function getCurrentlyPlayingTrack() {
  try {
    const res = await accessInstance.get(
      '/me/player/currently-playing?market=TW&additional_types=track',
    )

    return res.data
  } catch (err) {
    console.error(err)
  }
}

// 獲取最近播放歌曲
export async function getRecentlyPlayedTracks() {
  try {
    const res = await accessInstance.get('/me/player/recently-played?limit=10')

    return res.data
  } catch (err) {
    console.error('獲取最近播放歌曲失敗', err)
  }
}
