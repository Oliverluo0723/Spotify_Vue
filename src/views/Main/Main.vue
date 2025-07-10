<script setup lang="ts">
import Badge from '@/components/Badge.vue'

import TopArtistsGrid from '@/views/Main/components/TopArtistsGrid.vue'
</script>
<template>
  <section class="main-wrap flex flex-col gap-4">
    <div class="flex gap-2">
      <Badge>所有</Badge>
      <Badge>音樂</Badge>
      <Badge>Podcast</Badge>
    </div>
    <!--  -->
    <TopArtistsGrid />
    <!--  -->
  </section>
</template>
<style lang="scss" scoped>
.main-wrap {
  width: 100%;
  padding: 1rem;
}
</style>
