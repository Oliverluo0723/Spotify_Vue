import { instance } from '@/api/config'

// 獲取當前使用者資料

export async function getCurrentUserProfile() {
  const res = await instance.get('/me')
  console.log(res.data)

  return res.data
}
