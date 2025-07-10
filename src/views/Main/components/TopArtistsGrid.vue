<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Api
import { getFollowedArtists } from '@/api/UserApi'
// type
import type { ArtistProps } from '@/types/aritist'
// utils
import { truncateName } from '@/utils/truncateName'

const artists = ref<ArtistProps[] | []>([])

async function handleGetFollowedArtists(limit: number): Promise<ArtistProps[]> {
  try {
    const res = await getFollowedArtists(limit)
    return res ?? []
  } catch (err) {
    console.error('獲取關注的藝人失敗', err)
    return []
  }
}

onMounted(async () => {
  const followedArtists = await handleGetFollowedArtists(8)
  artists.value = followedArtists

  // if (followedArtists.length === 0) {
  //   console.log('用戶尚未關注任何藝人')
  // } else {
  //   console.log('顯示已關注的藝人列表', artists.value)
  // }
})
</script>
<template>
  <a-row :gutter="[16, 16]">
    <a-col
      v-for="col in artists"
      :key="col.id"
      :xs="12"
      :sm="12"
      :md="12"
      :lg="6"
      :xl="6"
      class="col"
    >
      <RouterLink v-hover :to="`/home/aritist/${col.id}`" class="w-full h-full flex gap-4">
        <div class="box bg-amber-100">
          <img :src="col.images[0].url" alt="img" class="w-full h-full object-cover" />
        </div>
        <div class="flex items-center truncate">
          {{ col.name }}
        </div>
      </RouterLink>
    </a-col>
  </a-row>
</template>
<style lang="scss" scoped>
.col {
  width: 100%;
  height: clamp(40px, 40vw, 50px);
  display: flex;
  gap: 1rem;
}

.box {
  height: 100%;
  aspect-ratio: 1/1;
}

.truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
