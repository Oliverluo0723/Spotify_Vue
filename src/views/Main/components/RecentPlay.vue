<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ArtistsCard from '@/components/ArtistsCard.vue'
import { getRecentlyPlayedTracks } from '@/api/Player'

const recentlyList = ref<null | []>(null)

async function handleGetRecentlyPlayedTracks() {
  try {
    const res = await getRecentlyPlayedTracks()

    if (res) {
      recentlyList.value = res.items
      console.log(recentlyList.value)
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
  <section>
    <div class="flex justify-between items-end">
      <router-link to="/home">
        <span class="text-2xl font-semibold">最近播放</span>
      </router-link>
      <router-link to="/home">
        <span class="text-gray-400 hover:border-b-2">顯示所有內容</span>
      </router-link>
    </div>
    <div class="w-full mt-2">
      <PerfectScrollbar>
        <ul class="flex">
          <li v-for="(item, index) in recentlyList" :key="index">
            <ArtistsCard :img="item.track.album.images[2].url" :name="item.track.name" />
          </li>
        </ul>
      </PerfectScrollbar>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  width: 100%;
  height: auto;
}

.ps {
  width: 100%;
  padding: 1rem 0;
}
</style>
