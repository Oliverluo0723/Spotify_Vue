import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { SpotifyTrack } from '@/data/track'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const usePlayerStore = defineStore('player', () => {
  const currentTrack = ref<SpotifyTrack | null>(null)
  const isPlaying = ref(false)

  function playTrack(track: SpotifyTrack) {
    currentTrack.value = track
    isPlaying.value = true
    // 這裡可以呼叫 Spotify SDK 播放該曲目
  }

  function pause() {
    isPlaying.value = false
    // 呼叫 Spotify SDK 暫停
  }

  function resume() {
    isPlaying.value = true
    // 呼叫 Spotify SDK 繼續播放
  }

  return { currentTrack, isPlaying, playTrack, pause, resume }
})
