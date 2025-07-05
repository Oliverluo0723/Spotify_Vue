import { accessInstance } from '@/api/config'
import axios from 'axios'

export async function getTrack(id: string) {
  const res = await accessInstance.get(`/tracks/${id}`)

  return res.data
}
