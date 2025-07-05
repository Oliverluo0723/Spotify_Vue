<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getTrack } from '@/api/TrackApi'
import { ref, onMounted } from 'vue'
import type { SpotifyArtist, SpotifyImage, SpotifyTrack } from '@/types/track'
import { msToMinSec } from '@/utils/msToMinSec'
const route = useRoute()
const id: string = route.params.id as string

const trackData = ref<SpotifyTrack | null>(null)
const trackImgUrl = ref<SpotifyImage['url'] | null>(null)
const trackName = ref<SpotifyArtist['name'] | null>(null)

async function handleGetTrack() {
  const res = await getTrack(id)
  trackData.value = res

  if (trackData.value) {
    trackImgUrl.value = trackData.value.album.images[1].url
    trackName.value = trackData.value.name
  } else {
    return console.error('獲取藝人資料失敗')
  }
}

onMounted(async () => {
  await handleGetTrack()
})
</script>
<template>
  <section>
    <div class="track-top p-4">
      <a-flex align="center" gap="middle">
        <div>
          <img :src="trackImgUrl" alt="" />
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <div>歌曲</div>
            <h3 class="text-3xl">{{ trackName }}</h3>
          </div>
          <div class="flex items-end gap-2">
            <a-avatar>artist</a-avatar>
            <router-link :to="`/home`">
              <p>{{ trackData?.artists[0].name }}</p>
            </router-link>
            <p>{{ trackData?.album.name }}</p>
            <div class="flex items-center gap-2 text-[0.8rem] text-gray-400">
              <p>{{ trackData?.album.release_date }}</p>
              <p>{{ msToMinSec(trackData?.duration_ms ?? 0) }}</p>
              <p>724663</p>
            </div>
          </div>
        </div>
      </a-flex>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.track-top {
  width: 100%;
  height: clamp(200px, 40vw, 330px);
}
</style>
