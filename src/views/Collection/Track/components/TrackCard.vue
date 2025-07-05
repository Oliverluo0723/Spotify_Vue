<script setup lang="ts">
import { HeartFilled } from '@ant-design/icons-vue'
</script>
<template>
  <div v-hover class="mt-4 lg:mt-0 w-full h-[40px]">
    <RouterLink to="/home/tracks">
      <a-flex align="center" gap="12">
        <a-avatar shape="square" style="background-color: #93c5fd">
          <template #icon><HeartFilled /></template>
        </a-avatar>
        <div class="hidden lg:block">
          <div class="text-[0.85rem] text-green-500">已按讚的歌曲</div>
          <div class="text-[0.65rem]">播放清單 5040首歌曲</div>
        </div>
      </a-flex>
    </RouterLink>
  </div>
</template>
<style lang="scss" scoped></style>
