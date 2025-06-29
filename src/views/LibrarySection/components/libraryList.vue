<script setup lang="ts">
import { h, ref } from 'vue'
import { RouterLink } from 'vue-router'
// 假資料
import { libraryList } from '@/data/data'

const listData = ref(libraryList)
</script>
<template>
  <ul class="w-full">
    <li v-for="item in listData" :key="item.id" class="mt-3">
      <RouterLink :to="`/home/aritist${item.id}`">
        <a-flex align="center" gap="12">
          <div>
            <a-avatar :src="item.avatar"></a-avatar>
          </div>
          <div class="hidden md:block">
            <div>{{ item.name }}</div>
            <div class="text-[0.6rem] text-gray-500">{{ item.role }}</div>
          </div>
        </a-flex>
      </RouterLink>
    </li>
  </ul>
</template>
<style lang="scss" scoped></style>
