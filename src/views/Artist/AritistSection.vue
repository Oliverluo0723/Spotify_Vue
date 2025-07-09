<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
// 組件
import AritistHeader from './components/AritistHeader.vue'
import AritistSub from './components/AritistSub.vue'
import AritistPopularCard from './components/AritistPopularCard.vue'
import ChildPageFooter from '@/layouts/ChildPageFooter.vue'
// Api
import { getArtists, getArtistsTopTracks, getArtistsRelatedArtists } from '@/api/AritistApi'
// type
import type { ArtistProps } from '@/types/aritist'
import type { SpotifyTrack } from '@/types/track'

const route = useRoute()

const Artist = ref<ArtistProps | null>(null)
const ArtistToptrack = ref<SpotifyTrack[] | null>(null)
const RelatedArtists = ref<ArtistProps[] | null>(null)

watch(
  () => route.params.id,
  (newId) => {
    if (typeof newId === 'string') {
      fetchArtist(newId)
      fetchArtistTopTrack(newId)
      // fetchGetArtistsRelatedArtists(newId)
    }
  },
  { immediate: true },
)

async function fetchArtist(id: string): Promise<void> {
  Artist.value = await getArtists(id)
}

async function fetchArtistTopTrack(id: string): Promise<void> {
  ArtistToptrack.value = await getArtistsTopTracks(id)
}

async function fetchGetArtistsRelatedArtists(id: string): Promise<void> {
  RelatedArtists.value = await getArtistsRelatedArtists(id)
}

// 檢視更多
const ShowMore = ref(false)

function isShowMore() {
  ShowMore.value = !ShowMore.value
}

// 顯示的熱門歌曲數量
const displayedTracks = computed(() => {
  if (!ArtistToptrack.value) return []
  return ShowMore.value ? ArtistToptrack.value.slice(0, 10) : ArtistToptrack.value.slice(0, 5)
})
</script>

<template>
  <main>
    <AritistHeader v-if="Artist" :key="Artist.id" :artist="Artist" />
    <AritistSub />
    <section class="mt-4">
      <a-flex vertical gap="large">
        <h6>熱門</h6>
        <ul class="flex flex-col gap-2">
          <li v-for="item in displayedTracks" :key="item.id">
            <AritistPopularCard :list="item" />
          </li>
        </ul>
        <div class="w-full">
          <span @click="isShowMore" class="text-[0.7rem] text-gray-500 cursor-pointer">
            {{ ShowMore ? '收起' : '檢視更多' }}
          </span>
        </div>
      </a-flex>
    </section>
    <ChildPageFooter />
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
