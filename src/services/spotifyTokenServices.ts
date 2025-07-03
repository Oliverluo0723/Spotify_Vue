// src/services/SpotifyTokenService.ts
import axios from 'axios'

export interface TokenResponse {
  access_token: string
  refresh_token: string
  expires_in: number
  token_type: string
}

export class SpotifyTokenService {
  private static readonly API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'

  /**
   * 使用授權碼交換 access token
   */
  public static async exchangeCodeForTokens(code: string): Promise<TokenResponse> {
    try {
      const response = await axios.post<TokenResponse>(
        `${this.API_BASE_URL}/api/auth/spotify/callback`,
        { code },
      )

      const { access_token, refresh_token, expires_in } = response.data

      // 儲存 tokens
      this.storeTokens(access_token, refresh_token, expires_in)

      return response.data
    } catch (error) {
      console.error('Token 交換失敗:', error)
      throw new Error('無法獲取 Spotify 授權令牌')
    }
  }

  /**
   * 刷新 access token
   */
  public static async refreshAccessToken(): Promise<boolean> {
    try {
      const refreshToken = localStorage.getItem('spotify_refresh_token')
      if (!refreshToken) {
        return false
      }

      const response = await axios.post<Omit<TokenResponse, 'refresh_token'>>(
        `${this.API_BASE_URL}/api/auth/spotify/refresh`,
        { refresh_token: refreshToken },
      )

      const { access_token, expires_in } = response.data

      // 更新 access token
      this.storeAccessToken(access_token, expires_in)

      return true
    } catch (error) {
      console.error('Token 刷新失敗:', error)
      this.clearTokens()
      return false
    }
  }

  /**
   * 儲存 tokens 到 localStorage
   */
  private static storeTokens(accessToken: string, refreshToken: string, expiresIn: number): void {
    const expiryTime = Date.now() + expiresIn * 1000

    localStorage.setItem('spotify_access_token', accessToken)
    localStorage.setItem('spotify_refresh_token', refreshToken)
    localStorage.setItem('spotify_token_expiry', expiryTime.toString())
  }

  /**
   * 僅儲存 access token (用於刷新時)
   */
  private static storeAccessToken(accessToken: string, expiresIn: number): void {
    const expiryTime = Date.now() + expiresIn * 1000

    localStorage.setItem('spotify_access_token', accessToken)
    localStorage.setItem('spotify_token_expiry', expiryTime.toString())
  }

  /**
   * 清除所有 tokens
   */
  public static clearTokens(): void {
    localStorage.removeItem('spotify_access_token')
    localStorage.removeItem('spotify_refresh_token')
    localStorage.removeItem('spotify_token_expiry')
  }

  /**
   * 檢查是否已認證
   */
  public static isAuthenticated(): boolean {
    const token = localStorage.getItem('spotify_access_token')
    const expiry = localStorage.getItem('spotify_token_expiry')

    if (!token || !expiry) {
      return false
    }

    return Date.now() < parseInt(expiry)
  }

  /**
   * 獲取有效的 access token
   */
  public static async getValidAccessToken(): Promise<string | null> {
    const token = localStorage.getItem('spotify_access_token')
    const expiry = localStorage.getItem('spotify_token_expiry')

    if (!token) {
      return null
    }

    // 檢查是否即將過期 (提前 5 分鐘刷新)
    const isExpiringSoon = expiry && Date.now() > parseInt(expiry) - 300000

    if (isExpiringSoon) {
      const refreshed = await this.refreshAccessToken()
      if (refreshed) {
        return localStorage.getItem('spotify_access_token')
      }
      return null
    }

    return token
  }
}
