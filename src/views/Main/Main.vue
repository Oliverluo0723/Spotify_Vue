<script setup lang="ts">
import { ref } from 'vue'
import Badge from '@/components/Badge.vue'

import TopArtistsGrid from '@/views/Main/components/TopArtistsGrid.vue'
import RecentPlay from '@/views/Main/components/RecentPlay.vue'

const size = ref<number>(36)
</script>
<template>
  <section class="main-wrap flex flex-col gap-4">
    <a-space direction="vertical" :size="size">
      <div class="flex gap-2">
        <Badge>所有</Badge>
        <Badge>音樂</Badge>
        <Badge>Podcast</Badge>
      </div>
      <!--  -->
      <TopArtistsGrid />
      <RecentPlay />
      <!--  -->
    </a-space>
  </section>
</template>
<style lang="scss" scoped>
.main-wrap {
  width: 100%;
  padding: 1rem;
}
</style>
