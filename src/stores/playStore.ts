// stores/player.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCurrentlyPlayingTrack } from '@/api/Player'

export const usePlayerStore = defineStore('player', () => {
  const currentTrack = ref(null)
  const isPlaying = ref(false)
  const progressMs = ref(0)

  async function fetchCurrentlyPlaying() {
    const data = await getCurrentlyPlayingTrack()
    if (data) {
      currentTrack.value = data.item
      isPlaying.value = data.is_playing
      progressMs.value = data.progress_ms
    } else {
      currentTrack.value = null
      isPlaying.value = false
      progressMs.value = 0
    }
  }

  return {
    currentTrack,
    isPlaying,
    progressMs,
    fetchCurrentlyPlaying,
  }
})
