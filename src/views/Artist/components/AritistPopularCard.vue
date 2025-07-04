<script setup lang="ts">
import { msToMinSec } from '@/utils/msToMinSec'
import type { SpotifyTrack } from '@/types/track'

const props = defineProps<{
  list: SpotifyTrack
}>()

const { name, duration_ms, album } = props.list
</script>
<template>
  <div v-hover class="poupler-card flex justify-between items-center">
    <div class="flex items-center gap-4 w-[550px]">
      <span>1</span>
      <img :src="album.images[2].url" alt="專輯" class="albumImg" />
      <div class="w-[400px]">{{ name }}</div>
    </div>
    <div class="w-[100px] hidden lg:block">5000</div>
    <div class="w-[70px] sm:w-fit">
      <!-- <img class="addedCheckMark" :src="addedCheckMark" alt="" /> -->
    </div>

    <div class="w-[100px] hidden lg:block">{{ msToMinSec(Number(duration_ms)) }}</div>
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
