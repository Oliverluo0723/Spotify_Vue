<script setup lang="ts">
import { ref } from 'vue'
// UI
import { ConfigProvider } from 'ant-design-vue'

interface ThemeConfig {
  borderRadius: number
  colorPrimary: string
}

const defaultData: ThemeConfig = {
  borderRadius: 6,
  colorPrimary: '#3c3c3c',
}

const data = ref<ThemeConfig>(defaultData)
</script>

<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: data.colorPrimary,
        borderRadius: data.borderRadius,
      },
    }"
  >
    <div class="app">
      <RouterView />
    </div>
  </ConfigProvider>
</template>

<style scoped lang="scss">
.app {
  position: relative;
  width: 100dvw;
  min-height: 100svh;
}
</style>
