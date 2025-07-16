<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Badge from '@/components/Badge.vue'

import TopArtistsGrid from '@/views/Main/components/TopArtistsGrid.vue'
import ContentSection from '@/views/Main/components/ContentSection.vue'

// Api
import { getRecentlyPlayedTracks } from '@/api/Player'
import { getUserTop } from '@/api/UserApi'
import { getAlbum } from '@/api/AlbumApi'

const size = ref<number>(36)

//----------------------------------------
// 🟢 最近播放
//----------------------------------------
const recentlyListRaw = ref<[]>([])
const recentlyList = computed(() =>
  recentlyListRaw.value.map((item) => ({
    img: item?.track?.album?.images?.[1]?.url || '',
    name: item?.track?.name || 'Unknown Track',
  })),
)

async function handleGetRecentlyPlayedTracks(): Promise<void> {
  try {
    const response = await getRecentlyPlayedTracks()

    if (!response) {
      console.log('沒有')
      return
    }

    recentlyListRaw.value = response.items || []
  } catch (error) {
    console.error('Error fetching recently played tracks:', error)
  }
}

//----------------------------------------
// 🟢 你喜愛的藝人
//----------------------------------------
const userTopListRaw = ref<[]>([])
const userTopList = computed(() =>
  userTopListRaw.value.map((item: any) => ({
    img: item?.images?.[1]?.url || '',
    name: item?.name || 'Unknown Artist',
  })),
)

async function handleUserTopList() {
  try {
    const response = await getUserTop()

    if (!response) {
      return
    }

    userTopListRaw.value = response.items || []
  } catch (error) {
    console.error('Error fetching user top list:', error)
  }
}

onMounted(async () => {
  await handleGetRecentlyPlayedTracks()
  await handleUserTopList()
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
      <!-- 最近播放 -->
      <ContentSection :list="recentlyList" />
      <ContentSection :list="userTopList" shape="circle"> 你最喜愛的藝人 </ContentSection>
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
