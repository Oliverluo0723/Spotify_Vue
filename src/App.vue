<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <h2>我是App</h2>
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: auto;
}
</style>
