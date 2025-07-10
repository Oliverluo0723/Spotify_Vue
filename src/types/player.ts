/**
 * 使用者當前播放狀態
 */
export interface PlaybackState {
  /** 當前使用的播放裝置資訊 */
  device: {
    /** 裝置 ID */
    id: string
    /** 是否為當前使用中的裝置 */
    is_active: boolean
    /** 是否為私人播放模式 */
    is_private_session: boolean
    /** 是否有限制播放內容 */
    is_restricted: boolean
    /** 裝置名稱，例如「Kitchen speaker」 */
    name: string
    /** 裝置類型，如電腦、手機、喇叭等 */
    type: string
    /** 音量百分比 (0~100) */
    volume_percent: number
    /** 是否支援調整音量 */
    supports_volume: boolean
  }

  /** 循環播放狀態，如 off / context / track */
  repeat_state: string

  /** 是否啟用隨機播放 */
  shuffle_state: boolean

  /** 當前播放的上下文，例如播放清單、專輯等 */
  context: {
    /** 上下文類型，如 playlist / album 等 */
    type: string
    /** 上下文 API 的連結 */
    href: string
    /** 上下文的外部連結（Spotify 網址） */
    external_urls: {
      spotify: string
    }
    /** 上下文 URI */
    uri: string
  }

  /** 伺服器時間戳記 (毫秒) */
  timestamp: number

  /** 當前播放進度（毫秒） */
  progress_ms: number

  /** 是否正在播放中 */
  is_playing: boolean

  /** 當前播放的曲目或節目 */
  item: {
    /** 專輯資訊 */
    album: {
      /** 專輯類型，如 album / single / compilation */
      album_type: string
      /** 專輯包含的曲目數量 */
      total_tracks: number
      /** 可播放此專輯的市場國家代碼 */
      available_markets: string[]
      /** 專輯的外部連結 */
      external_urls: {
        spotify: string
      }
      /** API 連結 */
      href: string
      /** 專輯 ID */
      id: string
      /** 專輯封面圖片 */
      images: {
        url: string
        height: number
        width: number
      }[]
      /** 專輯名稱 */
      name: string
      /** 專輯發行日期 */
      release_date: string
      /** 發行日期精度，如 year / month / day */
      release_date_precision: string
      /** 播放限制原因（如僅限特定市場） */
      restrictions?: {
        reason: string
      }
      /** 物件類型 */
      type: string
      /** 專輯 URI */
      uri: string
      /** 專輯的藝術家列表 */
      artists: {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        name: string
        type: string
        uri: string
      }[]
    }

    /** 曲目的藝術家列表 */
    artists: {
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      name: string
      type: string
      uri: string
    }[]

    /** 可播放的市場 */
    available_markets: string[]

    /** 碟片編號 */
    disc_number: number

    /** 曲目長度（毫秒） */
    duration_ms: number

    /** 是否為限制級內容 */
    explicit: boolean

    /** 外部編號，如 ISRC / EAN / UPC */
    external_ids: {
      isrc: string
      ean: string
      upc: string
    }

    /** 外部連結 */
    external_urls: {
      spotify: string
    }

    /** API 連結 */
    href: string

    /** 曲目 ID */
    id: string

    /** 是否可播放 */
    is_playable: boolean

    /** 若此曲目為連結來源，顯示來源資訊 */
    linked_from?: Record<string, unknown>

    /** 播放限制 */
    restrictions?: {
      reason: string
    }

    /** 曲目名稱 */
    name: string

    /** 曲目受歡迎度 (0~100) */
    popularity: number

    /** 試聽 URL（部分曲目可用） */
    preview_url: string | null

    /** 曲目編號（專輯中的序號） */
    track_number: number

    /** 物件類型（通常為 track） */
    type: string

    /** 曲目 URI */
    uri: string

    /** 是否為本地檔案 */
    is_local: boolean
  }

  /** 當前播放內容類型，如 track / episode / ad 等 */
  currently_playing_type: string

  /** 可執行的操作列表 */
  actions: {
    /** 是否可打斷播放 */
    interrupting_playback: boolean
    /** 是否可暫停 */
    pausing: boolean
    /** 是否可繼續播放 */
    resuming: boolean
    /** 是否可快轉 */
    seeking: boolean
    /** 是否可跳到下一首 */
    skipping_next: boolean
    /** 是否可跳到上一首 */
    skipping_prev: boolean
    /** 是否可切換上下文循環播放 */
    toggling_repeat_context: boolean
    /** 是否可切換隨機播放 */
    toggling_shuffle: boolean
    /** 是否可切換曲目循環播放 */
    toggling_repeat_track: boolean
    /** 是否可切換播放裝置 */
    transferring_playback: boolean
  }
}
