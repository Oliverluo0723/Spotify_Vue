import axios from 'axios'
import { SpotifyTokenService } from '@/services/spotifyTokenServices'

export const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_TOKEN}`,
  },
})

export const accessInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 10000,
})

// 修正：Axios config.headers 需為 Record<string, string> 型別，且 originalRequest.headers 需確保存在
accessInstance.interceptors.request.use(
  async (config) => {
    const token = await SpotifyTokenService.getValidAccessToken()
    if (token) {
      config.headers = config.headers || {}
      // 修正：headers 可能為 AxiosHeaders 實例，需正確設置
      if (typeof config.headers.set === 'function') {
        config.headers.set('Authorization', `Bearer ${token}`)
      } else {
        config.headers['Authorization'] = `Bearer ${token}`
      }
    }
    console.log('我是發送攔截器')
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

accessInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true // 防止無限迴圈

      const refreshed = await SpotifyTokenService.refreshAccessToken()
      if (refreshed) {
        // 取得新的 access_token
        const newToken = localStorage.getItem('spotify_access_token')
        // 修正：headers 可能為 AxiosHeaders 實例，需正確設置
        originalRequest.headers = originalRequest.headers || {}
        if (typeof originalRequest.headers.set === 'function') {
          originalRequest.headers.set('Authorization', `Bearer ${newToken}`)
        } else {
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`
        }
        // 使用同一個 axios 實例重試原請求
        return accessInstance(originalRequest)
      } else {
        // 刷新失敗，執行登出或導向登入
        SpotifyTokenService.clearTokens()
      }
    }

    return Promise.reject(error)
  },
)
