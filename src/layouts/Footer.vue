<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  RetweetOutlined,
  SwapOutlined,
  ApiFilled,
} from '@ant-design/icons-vue'
import PlayButton from '@/components/PlayButton.vue'
// api
import { getCurrentlyPlayingTrack } from '@/api/Player'

const currentTrackImg = ref<string | null>(null)
const currentTrackName = ref<string | null>(null)
const currentTrackArtists = ref<string[]>([])

const iconStyle = ref({
  fontSize: '1.35rem',
})

onMounted(async () => {
  const currentTrack = await getCurrentlyPlayingTrack()

  if (currentTrack) {
    currentTrackImg.value = currentTrack.item.album.images[2].url
    currentTrackName.value = currentTrack.item.name
    currentTrackArtists.value = currentTrack.item.artists
    console.log(currentTrackArtists.value)
  } else {
    console.log('目前沒在播')
  }
})
</script>
<template>
  <footer>
    <a-row class="w-full h-full">
      <a-col :span="6">
        <a-flex class="w-full h-full" gap="16" align="center">
          <div class="h-[50px] aspect-square" v-if="currentTrackImg">
            <img :src="currentTrackImg" alt="img" />
          </div>
          <div>
            <div>{{ currentTrackName }}</div>
            <div>
              <span
                v-for="(item, index) in currentTrackArtists"
                class="text-gray-400"
                :class="{ 'ml-2': index !== 0 }"
                :key="item.id"
              >
                {{ item.name }}
              </span>
            </div>
          </div>
        </a-flex>
      </a-col>
      <!-- 中間 -->
      <a-col :span="12">
        <a-flex vertical justify="center" align="center" gap="6" class="w-full h-[72px]">
          <div>
            <a-flex gap="8">
              <a-tooltip>
                <template #title>隨機播放</template>
                <SwapOutlined :style="iconStyle" class="isHover" />
              </a-tooltip>
              <!--  -->
              <a-tooltip>
                <template #title>上一步</template>
                <StepBackwardOutlined :style="iconStyle" class="isHover" />
              </a-tooltip>
              <!--  -->
              <PlayButton />
              <!--  -->
              <a-tooltip>
                <template #title>下一步</template>
                <StepForwardOutlined :style="iconStyle" class="isHover" />
              </a-tooltip>
              <!--  -->
              <a-tooltip>
                <template #title>循環播放</template>
                <RetweetOutlined :style="iconStyle" class="isHover" />
              </a-tooltip>
            </a-flex>
          </div>
          <div>
            <a-flex justify="center" align="center" gap="8">
              <span class="text-[0.7rem]">1:07</span>
              <div class="playBar"></div>
              <span class="text-[0.7rem]">2:51</span>
            </a-flex>
          </div>
        </a-flex>
      </a-col>
      <!-- 右邊 -->
      <a-col :span="6">
        <a-flex class="w-full h-[72px]" justify="center" align="center">
          <a-tooltip>
            <template #title>現正播放畫面</template>
            <ApiFilled class="isHover" />
          </a-tooltip>
        </a-flex>
      </a-col>
    </a-row>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  position: fixed;
  top: 100%;
  left: 0;
  padding: 0 8px;
  transform: translate(0, -100%);
  width: 100%;
  height: 72px;
  color: #ededed;
  background-color: #111;
  z-index: 100;
}

.playBar {
  width: clamp(200px, 40vw, 400px);
  height: 4px;
  background-color: #ededed;
  border-radius: 12px;
}

.isHover:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.15s;
}
</style>
