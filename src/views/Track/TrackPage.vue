<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
// 組件
import TrackTop from '@/views/Track/components/TrackTop.vue'
import TrackSub from '@/views/Track/components/TrackSub.vue'
import TrackShowArtists from '@/views/Track/components/TrackShowArtists.vue'
import ChildPageFooter from '@/layouts/ChildPageFooter.vue'
// Api
import { getTrack } from '@/api/TrackApi'

const route = useRoute()
const id: string | string[] = route.params.id
const artistsData = ref()
const artistsID = ref<string[]>([]) // 給定初始值
const isLoading = ref(true) // 加載狀態

async function handleGatTrack() {
  const res = await getTrack(id as string)
  if (res) {
    return res
  }
  return null
}

onMounted(async () => {
  try {
    const res = await handleGatTrack()
    artistsData.value = res?.artists

    if (artistsData.value) {
      artistsID.value = artistsData.value.map((item) => item.id)
    }
  } catch (error) {
    console.error('獲取數據失敗:', error)
  } finally {
    // 重點：無論成功或失敗都要設置 loading 為 false
    isLoading.value = false
  }
})
</script>
<template>
  <section class="trackPage">
    <TrackTop />
    <TrackSub />
    <TrackShowArtists v-if="!isLoading && artistsID.length > 0" :id="artistsID" />
    <ChildPageFooter />
  </section>
</template>

<style lang="scss" scoped>
.trackPage {
  width: 100%;
  height: auto;
  padding: 1rem;
}
</style>
