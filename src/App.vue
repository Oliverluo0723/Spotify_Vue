<script setup lang="ts">
import { ref } from 'vue'
// UI
import { ConfigProvider, theme } from 'ant-design-vue'
// 組件
import Header from '@/layouts/Header.vue'
import Footer from './layouts/Footer.vue'

interface ThemeConfig {
  borderRadius: number
  colorPrimary: string
}

const defaultData: ThemeConfig = {
  borderRadius: 6,
  colorPrimary: '#3c3c3c',
}

const data = ref<ThemeConfig>(defaultData)

const { token } = theme.useToken()
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
      <Header />
      <RouterView />
      <Footer />
    </div>
  </ConfigProvider>
</template>

<style scoped lang="scss">
.app {
  position: relative;
  width: 100vw;
  min-height: 100svh;
  padding: 0 8px;
}
</style>
