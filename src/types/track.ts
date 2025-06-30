/**
 * Spotify 圖片物件
 * 表示專輯封面或藝人頭像，包含不同解析度
 */
export interface SpotifyImage {
  /** 圖片網址 */
  url: string
  /** 圖片高度（像素），可能為 null */
  height?: number
  /** 圖片寬度（像素），可能為 null */
  width?: number
}

/**
 * Spotify 外部連結
 * 常見於 album/artist/track 的官方連結
 */
export interface SpotifyExternalUrl {
  /** Spotify 網頁版連結 */
  spotify: string
}

/**
 * Spotify 藝人物件
 * 表示演出者或參與者
 */
export interface SpotifyArtist {
  /** 藝人官方外部連結 */
  external_urls: SpotifyExternalUrl
  /** Spotify API 藝人端點 URL */
  href: string
  /** Spotify 藝人 ID */
  id: string
  /** 藝人名稱 */
  name: string
  /** 固定為 'artist' */
  type: 'artist'
  /** Spotify URI，可用於 APP 跳轉 */
  uri: string
}

/**
 * Spotify 專輯物件
 * 表示曲目所屬的專輯及其屬性
 */
export interface SpotifyAlbum {
  /** 專輯類型，如 album/single/compilation */
  album_type: string
  /** 專輯內曲目總數 */
  total_tracks: number
  /** 可播放此專輯的市場（國家代碼） */
  available_markets: string[]
  /** 專輯外部連結 */
  external_urls: SpotifyExternalUrl
  /** API 專輯端點 URL */
  href: string
  /** Spotify 專輯 ID */
  id: string
  /** 專輯封面圖片列表 */
  images: SpotifyImage[]
  /** 專輯名稱 */
  name: string
  /** 發行日期（格式可能為年、月或日） */
  release_date: string
  /** 發行日期的精確度：year | month | day */
  release_date_precision: 'year' | 'month' | 'day'
  /** 播放限制（如僅特定市場） */
  restrictions?: {
    /** 限制原因，例如 'market' */
    reason: string
  }
  /** 固定為 'album' */
  type: 'album'
  /** Spotify URI，可用於 APP 跳轉 */
  uri: string
  /** 專輯的藝人列表（通常至少有一位） */
  artists: SpotifyArtist[]
}

/**
 * 國際標準編碼物件
 * 用於追蹤曲目或專輯的國際代碼
 */
export interface SpotifyExternalIds {
  /** 國際標準錄音代碼（ISRC） */
  isrc?: string
  /** 國際商品條碼（EAN） */
  ean?: string
  /** 通用產品代碼（UPC） */
  upc?: string
}

/**
 * Spotify 曲目物件
 * Web API 取得單一曲目或多曲目時的結構
 */
export interface SpotifyTrack {
  /** 所屬專輯完整資料 */
  album: SpotifyAlbum
  /** 演出此曲目的藝人列表 */
  artists: SpotifyArtist[]
  /** 可播放此曲目的市場（國家代碼） */
  available_markets: string[]
  /** 曲目所屬碟片編號（若有多張碟） */
  disc_number: number
  /** 曲目長度（毫秒） */
  duration_ms: number
  /** 是否包含不雅詞彙（成人內容） */
  explicit: boolean
  /** 國際編碼，如 ISRC/EAN/UPC */
  external_ids: SpotifyExternalIds
  /** 曲目的外部連結（官方 Spotify 網頁） */
  external_urls: SpotifyExternalUrl
  /** Spotify API 曲目端點 URL */
  href: string
  /** Spotify 曲目 ID */
  id: string
  /** 是否可播放（受限內容可能不可播放） */
  is_playable: boolean
  /** 若此曲目為其他版本的鏈結來源 */
  linked_from?: Record<string, unknown>
  /** 播放限制（如僅特定市場） */
  restrictions?: {
    /** 限制原因，如 'market' */
    reason: string
  }
  /** 曲目名稱 */
  name: string
  /** 曲目流行度（0~100） */
  popularity: number
  /** 30 秒預覽音訊片段 URL（可能為 null） */
  preview_url?: string | null
  /** 曲目在專輯內的曲序（從 1 開始） */
  track_number: number
  /** 固定為 'track' */
  type: 'track'
  /** Spotify URI，可用於 APP 跳轉 */
  uri: string
  /** 是否為本機檔案（非 Spotify 雲端） */
  is_local: boolean
}

export const mock4s4kiTrack: SpotifyTrack = {
  album: {
    album_type: 'single',
    total_tracks: 1,
    available_markets: ['JP', 'US', 'TW'],
    external_urls: {
      spotify: 'https://open.spotify.com/album/EXAMPLE_ALBUM_ID',
    },
    href: 'https://api.spotify.com/v1/albums/EXAMPLE_ALBUM_ID',
    id: 'EXAMPLE_ALBUM_ID',
    images: [
      {
        url: 'https://i.scdn.co/image/EXAMPLE_IMAGE_URL',
        height: 640,
        width: 640,
      },
    ],
    name: 'ねえ聞いて',
    release_date: '2024-05-10',
    release_date_precision: 'day',
    type: 'album',
    uri: 'spotify:album:EXAMPLE_ALBUM_ID',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/5yCWuaBlu42BKsnW89brND',
        },
        href: 'https://api.spotify.com/v1/artists/5yCWuaBlu42BKsnW89brND',
        id: '5yCWuaBlu42BKsnW89brND',
        name: '4s4ki',
        type: 'artist',
        uri: 'spotify:artist:5yCWuaBlu42BKsnW89brND',
      },
    ],
  },
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5yCWuaBlu42BKsnW89brND',
      },
      href: 'https://api.spotify.com/v1/artists/5yCWuaBlu42BKsnW89brND',
      id: '5yCWuaBlu42BKsnW89brND',
      name: '4s4ki',
      type: 'artist',
      uri: 'spotify:artist:5yCWuaBlu42BKsnW89brND',
    },
  ],
  available_markets: ['JP', 'US', 'TW'],
  disc_number: 1,
  duration_ms: 180000,
  explicit: false,
  external_ids: {
    isrc: 'JP1234567890',
    ean: '0987654321098',
    upc: '098765432109',
  },
  external_urls: {
    spotify: 'https://open.spotify.com/track/2XVyl3Ys1eXFTmNO7MBqkv',
  },
  href: 'https://api.spotify.com/v1/tracks/2XVyl3Ys1eXFTmNO7MBqkv',
  id: '2XVyl3Ys1eXFTmNO7MBqkv',
  is_playable: true,
  linked_from: undefined,
  restrictions: undefined,
  name: 'ねえ聞いて',
  popularity: 65,
  preview_url: 'https://p.scdn.co/mp3-preview/EXAMPLE_PREVIEW_URL.mp3',
  track_number: 1,
  type: 'track',
  uri: 'spotify:track:2XVyl3Ys1eXFTmNO7MBqkv',
  is_local: false,
}
