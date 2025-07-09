import { accessInstance } from '@/api/config'

interface SearchForItemParams {
  q: string // 搜尋關鍵字，必填
  type: string[] // 搜尋類型，必填，例如 ['artist', 'track']
  market?: string // 市場代碼，選填，例如 'TW'
  limit?: number // 最大筆數，選填，預設 20，最大 50
  offset?: number // 分頁偏移，選填，預設 0
  include_external?: 'audio' // 是否包含外部音訊，選填
}

interface SearchForItemResponse {
  artists?: any
  albums?: any
  tracks?: any
  playlists?: any
  shows?: any
  episodes?: any
  audiobooks?: any
}

export async function SearchForItem(
  params: SearchForItemParams,
): Promise<SearchForItemResponse | null> {
  try {
    const { q, type, market, limit = 20, offset = 0, include_external } = params

    // type 需用逗號串接成字串
    const typeStr = type.join(',')

    // 建立 URLSearchParams 用於編碼查詢字串
    const queryParams = new URLSearchParams({
      q,
      type: typeStr,
      limit: limit.toString(),
      offset: offset.toString(),
    })

    if (market) queryParams.append('market', market)
    if (include_external) queryParams.append('include_external', include_external)

    const res = await accessInstance.get(`/search?${queryParams.toString()}`)

    return res.data
  } catch (err) {
    console.error('搜尋失敗', err)
    return null
  }
}
