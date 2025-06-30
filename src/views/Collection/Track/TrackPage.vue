<script setup lang="ts">
import { ref } from 'vue'
// icon
import { HeartFilled } from '@ant-design/icons-vue'
import { formatNumberWithDot } from '@/utils/formatNumberWithDot'

const iconSize = ref({ sm: 100, md: 120, lg: 140 })
</script>
<template>
  <section>
    <div class="track-top flex justify-center items-center">
      <div class="top-wrap flex justify-evenly items-center">
        <a-avatar
          shape="square"
          :size="{ xs: 80, sm: 80, md: 120, lg: 140, xl: 140, xxl: 140 }"
          style="background-color: #6443ec"
        >
          <template #icon>
            <HeartFilled />
          </template>
        </a-avatar>
        <div class="flex flex-col gap-4">
          <span>播放清單</span>
          <h2 class="md:text-3xl lg:text-5xl font-semibold">已按讚的歌曲</h2>
          <span>
            <a-flex align="end" :gap="{ lg: 4 }">
              <span><a-avatar size="small">user</a-avatar></span>
              <span>Tomica_</span>
              <span class="text-[0.7rem] text-gray-400 font-semibold"
                >{{ formatNumberWithDot(5014) }}首歌曲</span
              >
            </a-flex>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.track-top {
  width: 100%;
  height: clamp(150px, 20vw, 200px);
}

.top-wrap {
  width: 90%;
  height: 90%;
  // background-color: skyblue;
}
</style>
