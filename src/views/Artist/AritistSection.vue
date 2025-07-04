<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
// 組件
import AritistHeader from './components/AritistHeader.vue'
import AritistSub from './components/AritistSub.vue'
import AritistPopularCard from './components/AritistPopularCard.vue'
// Api
import { getArtists } from '@/api/AritistApi'
// type
import type { ArtistProps } from '@/types/aritist'

// 假資料
import { PopularList } from '@/types/data'
import { mockArtists } from '@/types/aritist'

const route = useRoute()

const Artist = ref<ArtistProps | null>(null)
const id = route.params.id

watch(
  () => route.params.id,
  async (newId) => {
    Artist.value = await getArtists(newId)
    console.log('我是', Artist.value?.id)
  },
  { immediate: true },
)

const FakePopularList = ref(PopularList)
const mockData = ref(mockArtists)

// 找藝人
const currentArtist = computed(() => {
  const id = route.params.id as string
  return mockData.value.find((artist) => artist.id === id)
})

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
  <main>
    <AritistHeader v-if="Artist" :key="Artist.id" :artist="Artist" />
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
</style>
