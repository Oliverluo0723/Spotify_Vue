<script setup lang="ts">
import { ref } from 'vue'
import imgUrl from '@/assets/culenasm.jpg'

const props = defineProps({
  artist: Object,
})

const track = ref(props.artist.track)
const trackImg = ref(null)
const trackName = ref('')

if (track.value) {
  trackName.value = track.value.name
  trackImg.value = track.value.album.images[1].url

  console.log(trackName.value)
  console.log(trackImg.value)
} else {
  console.error('獲取藝人資料失敗')
}
</script>
<template>
  <div class="card">
    <div class="w-full flex justify-center">
      <a-avatar shape="circle" :size="156" :src="trackImg">藝人</a-avatar>
    </div>
    <div class="w-full mt-3">
      <div class="w-full h-[40px] text-[0.9rem]">{{ trackName }}</div>
      <div>單曲</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: clamp(170px, 40vw, 210px);
  height: clamp(200px, 40vw, 250px);
  padding: 0.25rem 0.5rem;
}

.card:hover {
  background-color: #dddddd;
}
</style>
