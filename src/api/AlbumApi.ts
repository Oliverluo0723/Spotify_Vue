import { accessInstance } from '@/api/config'
import type { SpotifyAlbum } from '@/types/album'

export async function getAlbum(id: string): Promise<SpotifyAlbum> {
  try {
    const res = await accessInstance.get(`/album/${id}`)

    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}
