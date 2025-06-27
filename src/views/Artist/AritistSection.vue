<script setup lang="ts">
import AritistHeader from './components/AritistHeader.vue'
import AritistSub from './components/AritistSub.vue'
</script>
<template>
  <main>
    <AritistHeader />
    <AritistSub />
    <div>熱門</div>
  </main>
</template>
<style lang="scss" scoped>
main {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: clamp(0.8rem, 10vw, 1rem);
}
</style>
