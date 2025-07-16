<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Card from '@/components/ArtistsCard.vue'

interface Prop {
  img: string
  name: string
}

const props = defineProps<{
  list: Prop[]
  shape?: 'circle' | 'square'
}>()
</script>
<template>
  <section>
    <div class="flex justify-between items-end">
      <router-link to="/home">
        <span class="text-2xl font-semibold">
          <slot>最近播放</slot>
        </span>
      </router-link>
      <router-link to="/home">
        <span class="text-gray-400 hover:border-b-2">顯示所有內容</span>
      </router-link>
    </div>
    <div class="w-full mt-2">
      <PerfectScrollbar>
        <ul class="flex">
          <li v-for="(item, index) in props.list" :key="index">
            <Card :img="item.img" :name="item.name" :shape="props.shape" />
          </li>
        </ul>
      </PerfectScrollbar>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  width: 100%;
  height: auto;
}

.ps {
  width: 100%;
  padding: 1rem 0;
}
</style>
