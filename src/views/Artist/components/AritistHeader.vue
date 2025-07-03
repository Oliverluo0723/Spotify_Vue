<script setup lang="ts">
import type { ArtistProps } from '@/types/aritist'
const props = defineProps<{
  artist: ArtistProps
}>()
import airtistImg from '@/assets/culenasm.jpg'
import { formatNumberWithDot } from '@/utils/formatNumberWithDot'
import checkSvg from '@/assets/check.svg'

const aritist = props.artist
</script>
<template>
  <header class="p-4 flex flex-col justify-center gap-[0.8rem]">
    <img :src="aritist.images[0].url" alt="" class="aritistImg" />
    <div class="flex items-center gap-2">
      <img :src="checkSvg" alt="已認證藝人" class="checkSvg" />
      <div class="blend-text">已認證藝人</div>
    </div>
    <h2 class="text-4xl lg:text-6xl blend-text">{{ aritist.name }}</h2>
    <div class="text-[0.7rem] blend-text">
      每月{{ formatNumberWithDot(aritist.followers.total) }}名觀眾
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  height: clamp(220px, 40vw, 260px);
  color: #ededed;
  z-index: 100;
}

.checkSvg {
  width: 20px;
  height: 20px;
}

.aritistImg {
  position: absolute;
  inset: 0 0 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* 設為負值確保在文字下方 */
  user-select: none;
}

.blend-text {
  color: white;
  mix-blend-mode: difference;
  position: relative;
  z-index: 10;
}
</style>
