<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Badge from '@/components/Badge.vue'

import TopArtistsGrid from '@/views/Main/components/TopArtistsGrid.vue'
import ContentSection from '@/views/Main/components/ContentSection.vue'

const size = ref<number>(36)

import { getRecentlyPlayedTracks } from '@/api/Player'

const recentlyList = ref<null | []>(null)

async function handleGetRecentlyPlayedTracks() {
  try {
    const res = await getRecentlyPlayedTracks()

    if (res) {
      recentlyList.value = res.items
    } else {
      console.log('沒有')
    }
  } catch (err) {
    console.error(err)
  }
}

onMounted(async () => {
  await handleGetRecentlyPlayedTracks()
})
</script>
<template>
  <section class="main-wrap flex flex-col gap-4">
    <a-space direction="vertical" :size="size">
      <div class="flex gap-2">
        <Badge>所有</Badge>
        <Badge>音樂</Badge>
        <Badge>Podcast</Badge>
      </div>
      <!--  -->
      <TopArtistsGrid />
      <ContentSection :list="recentlyList" />
      <!--  -->
    </a-space>
  </section>
</template>
<style lang="scss" scoped>
.main-wrap {
  width: 100%;
  padding: 1rem;
}
</style>
