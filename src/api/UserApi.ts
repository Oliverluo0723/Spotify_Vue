import { accessInstance } from '@/api/config'

// 獲取當前使用者資料
export async function getCurrentUserProfile() {
  try {
    const res = await accessInstance.get('/me')
    return res.data
  } catch (err) {
    console.error('獲取用戶資料失敗', err)
  }
}

// 獲取使用者關注的藝術家
export async function getFollowedArtists(limit: number = 20) {
  try {
    const res = await accessInstance.get(`/me/following?type=artist&limit=${limit}`)
    // console.log('關注資料', res.data.artists.items)
    return res.data.artists.items
  } catch (err) {
    console.error('獲取用戶關注藝術家失敗', err)
  }
}

interface GetUserTopProps {
  type: 'artists' | 'tracks'
  time_range: 'long_term' | 'medium_term' | 'short_term'
  // 默認值：20。最低：1。最大：50。
  limit?: number
  offset?: number
}

// 獲取用戶喜愛藝術家或曲目
export async function getUserTop({
  type = 'artists',
  time_range = 'medium_term',
  limit = 20,
  offset = 0,
}: Partial<GetUserTopProps> = {}) {
  try {
    const res = await accessInstance.get(`/me/top/${type}`, {
      params: {
        time_range,
        limit,
        offset,
      },
    })
    return res.data
  } catch (err) {
    console.error('獲取用戶喜愛藝術家或曲目失敗', err)
    throw err
  }
}
