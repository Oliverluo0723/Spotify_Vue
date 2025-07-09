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
  <div class="track-top">
    <a-flex align="center" gap="middle" wrap>
      <!-- 左 -->
      <div class="trackImg-wrap">
        <img :src="trackImgUrl" alt="" class="w-full h-full object-cover" />
      </div>
      <!-- 右 -->
      <div class="flex flex-col gap-4">
        <div>
          <div>歌曲</div>
          <h3 class="text-xl md:text-2xl lg:text-3xl">{{ trackName }}</h3>
        </div>
        <div class="flex flex-wrap items-end gap-2">
          <a-avatar>artist</a-avatar>
          <router-link :to="`/home/aritist/${trackData?.artists[0].id}`">
            <p>{{ trackData?.artists[0].name }}</p>
          </router-link>
          <p>{{ trackData?.album.name }}</p>
          <div class="flex flex-wrap items-center gap-2 text-[0.8rem] text-gray-400">
            <p>{{ trackData?.album.release_date }}</p>
            <p>{{ msToMinSec(trackData?.duration_ms ?? 0) }}</p>
            <p>724663</p>
          </div>
        </div>
      </div>
    </a-flex>
  </div>
</template>
<style lang="scss" scoped>
.track-top {
  width: 100%;
  height: clamp(280px, 40vw, 330px);
}

.trackImg-wrap {
  width: clamp(250px, 40vw, 300px);
  height: clamp(250px, 40vw, 300px);
  min-width: 250px;
  min-height: 250px;
  overflow: hidden;
}
</style>
