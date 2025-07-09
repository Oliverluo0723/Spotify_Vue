<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getSeveralArtists } from '@/api/AritistApi'
import type { ArtistProps } from '@/types/aritist'
interface Props {
  id: string[]
}

const props = defineProps<Props>()

const artists = ref<ArtistProps[] | null>([])

async function handleGetSeveralArtists() {
  try {
    const res = await getSeveralArtists(props.id)
    return res
  } catch (err) {
    console.error('獲取多位藝人資料失敗', console.error(err))
    return null
  }
}

onMounted(async () => {
  const artistsResponse = await handleGetSeveralArtists()
  console.log(artistsResponse)
  artists.value = artistsResponse
})
</script>
<template>
  <div class="trackShowArtists">
    <ul class="w-full h-auto">
      <li v-hover class="w-full h-[100px] flex items-center" v-for="item in artists">
        <RouterLink :to="`/home/aritist/${item.id}`" class="w-full">
          <a-flex align="center" gap="16">
            <div>
              <a-avatar shape="circle" :size="72" :src="item.images[0].url">藝人</a-avatar>
            </div>
            <div class="w-full flex justify-center flex-col">
              <span>藝人</span>
              <span class="text-xl">{{ item.name }}</span>
            </div>
          </a-flex>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.trackShowArtists {
  width: 100%;
  min-height: 200px;
  padding: 1rem;
}
</style>
