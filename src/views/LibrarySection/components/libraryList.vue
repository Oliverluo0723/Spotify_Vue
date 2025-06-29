<script setup lang="ts">
import { h, ref } from 'vue'
import { RouterLink } from 'vue-router'
// 假資料
import { mockArtists } from '@/data/aritist'
const artistData = ref(mockArtists)
</script>
<template>
  <ul class="w-full">
    <li v-for="item in artistData" :key="item.id" class="mt-3 relative z-10">
      <RouterLink :to="`/home/aritist${item.id}`">
        <div class="isHover">
          <a-flex align="center" gap="12">
            <div>
              <a-avatar :src="item.images[0].url"></a-avatar>
            </div>
            <div class="hidden md:block">
              <div>{{ item.name }}</div>
              <div class="text-[0.6rem] text-gray-500">{{ item.type }}</div>
            </div>
          </a-flex>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.isHover:hover::before {
  content: '';
  width: 100%;
  height: 40px;
  position: absolute;
  inset: 0 0 0 0;
  opacity: 0.2;
  border-radius: 8px;
  background-color: #3c3c3c;
  z-index: 0;
}
</style>
