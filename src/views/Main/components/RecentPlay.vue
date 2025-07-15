<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ArtistsCard from '@/components/ArtistsCard.vue'
// import { getRecentlyPlayedTracks } from '@/api/Player'

// const recent = ref(null)

// onMounted(async () => {
//   const res = await getRecentlyPlayedTracks()
//   recent.value = res
//   console.log(recent.value)
// })
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
      <ArtistsCard />
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  width: 100%;
  height: auto;
}
</style>
