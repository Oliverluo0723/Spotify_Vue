<script setup lang="ts">
// viwes
import TrackTop from './components/TrackTop.vue'
// components
import PlayButton from '@/components/PlayButton.vue'
// icon
import { DownloadOutlined, UnorderedListOutlined } from '@ant-design/icons-vue'
</script>
<template>
  <section>
    <TrackTop />
    <div class="track-sub">
      <a-flex justify="space-between" align="center" class="w-full h-full">
        <div class="flex gap-4">
          <PlayButton />
          <a-tooltip>
            <template #title>離線下載</template>
            <DownloadOutlined style="font-size: 1.5rem" />
          </a-tooltip>
        </div>
        <!--  -->
        <div>
          <span>清單</span>
          <UnorderedListOutlined />
        </div>
        <!--  -->
      </a-flex>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.track-sub {
  width: 100%;
  height: 80px;
}
</style>
