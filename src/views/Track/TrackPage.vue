<script setup lang="ts">
import TrackTop from './components/TrackTop.vue'
import TrackSub from '@/views/Track/components/TrackSub.vue'
</script>
<template>
  <section class="trackPage">
    <TrackTop />
    <TrackSub />
  </section>
</template>

<style lang="scss" scoped>
.trackPage {
  width: 100%;
  height: auto;
  padding: 1rem;
}
</style>
