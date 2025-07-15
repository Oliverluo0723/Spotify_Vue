<script setup lang="ts">
import imgUrl from '@/assets/culenasm.jpg'
</script>
<template>
  <div class="card">
    <div class="w-full flex justify-center">
      <a-avatar shape="circle" :size="156" :src="imgUrl">藝人</a-avatar>
    </div>
    <div class="w-full mt-3">
      <div>星期三的康怕內拉</div>
      <div>藝人</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: clamp(170px, 40vw, 200px);
  height: clamp(200px, 40vw, 225px);
  padding: 0.25rem 0.5rem;
}

.card:hover {
  background-color: #dddddd;
}
</style>
