import { defineStore } from 'pinia'
import type { SpotifyUserProfile } from '@/types/user'
import { getCurrentUserProfile } from '@/api/UserApi'

export const userStore = defineStore('userStore', {
  state: () => ({
    profile: null,
  }),
  actions: {
    async fetchProfile() {
      try {
        const data = await getCurrentUserProfile()

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
