<script setup lang="ts">
import { ref } from 'vue'
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PlayCircleFilled,
  RetweetOutlined,
  SwapOutlined,
} from '@ant-design/icons-vue'

const iconStyle = ref({
  fontSize: '1.35rem',
})
</script>
<template>
  <footer>
    <a-row>
      <a-col :span="6">
        <div></div>
      </a-col>
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
              <a-tooltip>
                <template #title>播放</template>
                <PlayCircleFilled style="font-size: 1.8rem" class="isHover" />
              </a-tooltip>
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
      <a-col :span="6">
        <div></div>
      </a-col>
    </a-row>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  position: fixed;
  top: 100%;
  left: 0;
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
  transform: scale(1.05);
  transition: all 0.1s;
}
</style>
