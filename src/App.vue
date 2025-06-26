<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, Button, theme } from 'ant-design-vue'

const defaultData = {
  borderRadius: 6,
  colorPrimary: '#3c3c3c',
}

const data = ref(defaultData)

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
    <RouterView />
  </ConfigProvider>
</template>

<style scoped lang="scss"></style>
