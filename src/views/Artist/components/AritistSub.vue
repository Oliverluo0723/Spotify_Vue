<script setup lang="ts">
import { h, ref } from 'vue'
import { CaretRightOutlined, EllipsisOutlined } from '@ant-design/icons-vue'
let isFollow = ref<boolean>(false)
let isFollowText = ref<string>('未關注')

function changeisFollow() {
  isFollow.value = !isFollow.value
  isFollowText.value = isFollow.value ? '已關注' : '未關注'
}
</script>
<template>
  <div class="aritist-sub flex items-center gap-4">
    <!-- 播放鍵 -->
    <a-button
      size="large"
      type="primary"
      shape="circle"
      class="btn"
      :icon="h(CaretRightOutlined)"
    />
    <!-- 關注鍵 -->
    <a-button size="small" type="primary" :ghost="isFollow" @click="changeisFollow">
      {{ isFollowText }}
    </a-button>

    <EllipsisOutlined style="font-size: 1.5rem" />
  </div>
</template>
<style lang="scss" scoped>
.aritist-sub {
  width: 100%;
}
</style>
