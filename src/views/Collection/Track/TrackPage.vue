<script setup lang="ts">
// viwes
import TrackTop from './components/TrackTop.vue'
// components
import PlayButton from '@/components/PlayButton.vue'
// icon
import { DownloadOutlined } from '@ant-design/icons-vue'
</script>
<template>
  <section>
    <TrackTop />
    <div class="track-sub">
      <div>
        <PlayButton />
        <a-tooltip>
          <template #title>離線下載</template>
          <DownloadOutlined style="font-size: 1.5rem" />
        </a-tooltip>
      </div>
      <div></div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.track-sub {
  width: 100%;
  height: 80px;
  background-color: skyblue;
}
</style>
