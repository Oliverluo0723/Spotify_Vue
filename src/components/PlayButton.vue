<script setup lang="ts">
import { h, ref } from 'vue'
// icon
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons-vue'
// Api
import { startResumePlayback, pausePlayback } from '@/api/Player'

const playState = ref<boolean>(false)
const tootltipText = ref<string>('播放')

// 播放
async function startPlaying(): Promise<void> {
  playState.value = true
  tootltipText.value = '暫停'
  await startResumePlayback()
}

// 暫停
async function stopPlaying(): Promise<void> {
  playState.value = false
  tootltipText.value = '播放'
  await pausePlayback()
}
</script>
<template>
  <a-tooltip>
    <template #title>{{ tootltipText }}</template>
    <a-button
      v-if="playState"
      @click="stopPlaying"
      size="large"
      type="primary"
      shape="circle"
      :icon="h(PauseOutlined)"
    />

    <a-button
      v-else
      @click="startPlaying"
      size="large"
      type="primary"
      shape="circle"
      :icon="h(CaretRightOutlined)"
    />
  </a-tooltip>
</template>
<style lang="scss" scoped></style>
