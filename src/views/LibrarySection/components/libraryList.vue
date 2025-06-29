<script setup lang="ts">
import { h, ref } from 'vue'
import { RouterLink } from 'vue-router'
// 假資料
import { mockArtists } from '@/data/aritist'
const artistData = ref(mockArtists)
</script>
<template>
  <section>
    <ul class="w-full">
      <li v-for="item in artistData" :key="item.id" class="mt-3 relative z-10">
        <RouterLink :to="`/home/aritist${item.id}`">
          <div v-hover>
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
  </section>
</template>
<style lang="scss" scoped></style>
