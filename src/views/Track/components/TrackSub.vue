<script setup lang="ts">
import PlayButton from '@/components/PlayButton.vue'
import LibraryActionButton from '@/components/LibraryActionButton .vue'
</script>
<template>
  <section class="track-sub flex items-center gap-4">
    <PlayButton />
    <LibraryActionButton />
  </section>
</template>
<style lang="scss" scoped>
.track-sub {
  width: 100%;
  height: 80px;
  //   background-color: orange;
}
</style>
