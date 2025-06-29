<script setup lang="ts">
import { ref, toRefs } from 'vue'
import albumImg from '@/assets/專輯.jpg'
import addedCheckMark from '@/assets/addedCheckmark.svg'

interface PopularProp {
  id: number
  songImg: string
  songName: string
  playCount: number
  isAddedToPlaylist: boolean
  duration_ms: string
}

const { popularList } = defineProps<{
  popularList: PopularProp
}>()

const { id, songImg, songName, playCount, isAddedToPlaylist, duration_ms } = toRefs(popularList)
</script>
<template>
  <div class="poupler-card flex justify-between items-center">
    <div class="flex items-center gap-4 w-[250px]">
      <span>{{ id }}</span>
      <img :src="albumImg" alt="專輯" class="albumImg" />
      <div class="w-[150px]">{{ songName }}</div>
    </div>
    <div class="w-[100px] hidden lg:block">{{ playCount }}</div>
    <div class="w-[70px] sm:w-fit">
      <img class="addedCheckMark" :src="addedCheckMark" alt="" v-if="isAddedToPlaylist" />
    </div>

    <div class="w-[100px] hidden lg:block">{{ duration_ms }}</div>
  </div>
</template>
<style lang="scss" scoped>
.poupler-card {
  width: 100%;
  height: 38px;
  padding: 0 8px;
}

.albumImg {
  width: 32px;
  height: 32px;
  object-fit: cover;
}

.addedCheckMark {
  width: 16px;
  height: 16px;
}
</style>
