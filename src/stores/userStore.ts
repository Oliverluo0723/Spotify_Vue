import { defineStore } from 'pinia'
import type { SpotifyUserProfile } from '@/types/user'
import { getCurrentUserProfile } from '@/api/UserApi'

export const useUserStore = defineStore('useUserStore', {
  state: () => ({
    profile: null as SpotifyUserProfile | null,
  }),
  actions: {
    async fetchProfile() {
      try {
        const data: SpotifyUserProfile = await getCurrentUserProfile()

        if (data) {
          this.profile = data
        }
      } catch (err) {
        console.error('取得使用者資料失敗', err)
      }
    },
    clearProfile() {
      this.profile = null
    },
  },
  persist: true,
})
