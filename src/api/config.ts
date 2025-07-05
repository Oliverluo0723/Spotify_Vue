import axios from 'axios'
import { SpotifyTokenService } from '@/services/spotifyTokenServices'

// const token = localStorage.getItem('spotify_access_token')

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
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
})

accessInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('spotify_access_token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

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
        // 更新原本失敗請求的 Authorization
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`
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
