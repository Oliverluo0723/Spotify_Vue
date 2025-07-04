<script setup lang="ts">
import { h, ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import type { ArtistProps } from '@/types/aritist'
// Api
import { getFollowedArtists } from '@/api/UserApi'
const ArtistData = ref<ArtistProps[]>([])

onMounted(async () => {
  const data = await getFollowedArtists()
  ArtistData.value = data
})
</script>
<template>
  <section>
    <ul class="w-full">
      <li v-for="item in ArtistData" :key="item.id" class="mt-3 relative z-10">
        <RouterLink :to="`/home/aritist${item.id}`">
          <div v-hover>
            <a-flex align="center" gap="12">
              <div>
                <a-avatar :src="item.images[0].url"></a-avatar>
              </div>
              <div class="hidden md:block">
                <div>{{ item.name }}</div>
                <div class="text-[0.6rem] text-gray-500">{{ item.type }}</div>
              </div>
            </a-flex>
          </div>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
<style lang="scss" scoped></style>
