import { SpotifyTokenService } from '@/services/spotifyTokenServices'

export class SpotifyAuth {
  private static readonly CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
  private static readonly REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI
  private static readonly SCOPES = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'user-follow-read',
    'app-remote-control',
    'streaming',
    'playlist-read-collaborative',
  ]

  // 生成隨機 state 參數用於安全驗證
  public static generateRandomString(length: number): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let text = ''
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }

  /**
   * 產生 Spotify 認證頁面的 URL 並重定向
   */
  public static requestAuthorization(): void {
    const state = SpotifyAuth.generateRandomString(16)
    localStorage.setItem('spotify_auth_state', state)

    const authUrl = new URL('https://accounts.spotify.com/authorize')
    authUrl.searchParams.append('response_type', 'code')
    authUrl.searchParams.append('client_id', SpotifyAuth.CLIENT_ID)
    authUrl.searchParams.append('scope', SpotifyAuth.SCOPES.join(' '))
    authUrl.searchParams.append('redirect_uri', SpotifyAuth.REDIRECT_URI)
    authUrl.searchParams.append('state', state)

    window.location.href = authUrl.toString()
  }

  /**
   * 驗證回調的 state 參數
   */
  public static validateState(receivedState: string): boolean {
    const storedState = localStorage.getItem('spotify_auth_state')
    return storedState === receivedState
  }

  /**
   * 清除儲存的 state
   */
  public static clearState(): void {
    localStorage.removeItem('spotify_auth_state')
  }

  /**
   * 檢查是否已經有有效的 token
   */
  public static isAuthenticated(): boolean {
    return !!localStorage.getItem('spotify_access_token')
  }

  /**
   * 登出 (清除所有認證資料)
   */
  public static logout(): void {
    SpotifyTokenService.clearTokens()
    this.clearState()
  }
}
