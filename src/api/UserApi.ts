import { accessInstance } from '@/api/config'

// 獲取當前使用者資料

export async function getCurrentUserProfile() {
  try {
    const res = await accessInstance.get('/me')
    console.log(res.data)

    return res.data
  } catch (err) {
    console.error(err)
  }
}
