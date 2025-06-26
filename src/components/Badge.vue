<script setup lang="ts">
import { theme } from 'ant-design-vue'

const { token } = theme.useToken()

const bgPrimary = token.value.colorPrimary

console.log(bgPrimary)
</script>
<template>
  <div class="badge" :style="{ backgroundColor: bgPrimary }"><slot></slot></div>
</template>
<style lang="scss" scoped>
.badge {
  width: fit-content;
  height: fit-content;
  padding: 2px 8px;
  font-size: 0.65rem;
  color: #ededed;
  border-radius: 12px;
}
</style>
