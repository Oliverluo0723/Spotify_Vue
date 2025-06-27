<script setup lang="ts">
import AritistHeader from './components/AritistHeader.vue'
import AritistSub from './components/AritistSub.vue'
</script>
<template>
  <main>
    <PerfectScrollbar>
      <AritistHeader />
      <AritistSub />
      <div class="aaa">熱門</div>
    </PerfectScrollbar>
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

// 100svh - Header高度 - Footer高度
.ps {
  height: calc(100svh - 60px - 72px);
}
</style>
