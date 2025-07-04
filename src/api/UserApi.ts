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
export async function getFollowedArtists() {
  try {
    const res = await accessInstance.get('/me/following?type=artist')
    console.log('關注資料', res.data)
    return res.data
  } catch (err) {
    console.error('獲取用戶關注藝術家失敗', err)
  }
}
