<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
// 組件
import AritistHeader from './components/AritistHeader.vue'
import AritistSub from './components/AritistSub.vue'
import AritistPopularCard from './components/AritistPopularCard.vue'
// 假資料
import { PopularList } from '@/data/data'
import { mockArtists } from '@/data/aritist'

const route = useRoute()

const FakePopularList = ref(PopularList)
const mockData = ref(mockArtists)

// 找藝人
const currentArtist = computed(() => {
  const id = route.params.id as string
  return mockData.value.find((artist) => artist.id === id)
})
console.log('當前藝人:', currentArtist.value?.name)

// 找藝人

// 檢視更多
const ShowMore = ref(false)

function isShowMore() {
  ShowMore.value = !ShowMore.value
}

const visibleList = computed(() => {
  return ShowMore.value ? FakePopularList.value.slice(0, 8) : FakePopularList.value.slice(0, 5)
})
// 檢視更多
</script>
<template>
  <PerfectScrollbar>
    <main>
      <AritistHeader v-if="currentArtist" :key="currentArtist.id" :artist="currentArtist" />
      <AritistSub />
      <section class="mt-4">
        <a-flex vertical gap="large">
          <h6>熱門</h6>
          <ul class="flex flex-col gap-2">
            <li v-for="item in visibleList" :key="item.id">
              <AritistPopularCard :popular-list="item" />
            </li>
          </ul>
          <div class="w-full">
            <span @click="isShowMore" class="text-[0.7rem] text-gray-500">檢視更多</span>
          </div>
        </a-flex>
      </section>
    </main>
  </PerfectScrollbar>
</template>
<style lang="scss" scoped>
main {
  width: 100%;
  height: 300vh;
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
