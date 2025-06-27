<script setup lang="ts">
import airtistImg from '@/assets/culenasm.jpg'
import checkSvg from '@/assets/check.svg'
</script>
<template>
  <header class="p-4 flex flex-col justify-center gap-[0.8rem]">
    <img :src="airtistImg" alt="" class="aritistImg" />
    <div class="flex items-center gap-2">
      <img :src="checkSvg" alt="已認證藝人" class="checkSvg" />
      <div>已認證藝人</div>
    </div>
    <h2 class="text-4xl lg:text-6xl">クレナズム</h2>
    <div class="text-[0.7rem]">每月1,449,231名觀眾</div>
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
</style>
