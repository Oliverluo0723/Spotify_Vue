<script setup lang="ts">
import { ref, onMounted } from 'vue'
import imgUrl from '@/assets/culenasm.jpg'

interface Props {
  img: string
  name: string
  shape?: 'circle' | 'square'
}

const { img, name, shape } = defineProps<Props>()
</script>
<template>
  <div v-hover class="card">
    <div class="w-full flex justify-center">
      <a-avatar :shape="shape ?? 'circle'" :size="156" :src="img">藝人</a-avatar>
    </div>
    <div class="w-full mt-3">
      <div class="w-full h-[40px] text-[0.9rem]">{{ name }}</div>
      <div>單曲</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: clamp(160px, 22vw, 180px);
  height: clamp(200px, 40vw, 250px);
  padding: 0.25rem 0.5rem;
}
</style>
