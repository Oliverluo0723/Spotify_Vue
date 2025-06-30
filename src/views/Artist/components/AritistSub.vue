<script setup lang="ts">
import { ref } from 'vue'
// components
import PlayButton from '@/components/PlayButton.vue'
// icon
import { EllipsisOutlined } from '@ant-design/icons-vue'
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
    <PlayButton />
    <!-- 關注鍵 -->
    <a-button size="small" type="primary" :ghost="!isFollow" @click="changeisFollow">
      {{ isFollowText }}
    </a-button>

    <a-dropdown :trigger="['click']">
      <EllipsisOutlined style="font-size: 1.5rem" />

      <template #overlay>
        <a-menu>
          <a-menu-item>新增至你的音樂庫</a-menu-item>
          <a-menu-item>新增至佇列</a-menu-item>
          <a-menu-item>前往藝人電台</a-menu-item>
          <a-menu-item>新增至播放清單</a-menu-item>
          <a-menu-item>分享</a-menu-item>
          <a-menu-item>在桌面板App中開啟</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<style lang="scss" scoped>
.aritist-sub {
  width: 100%;
  height: clamp(40px, 10vw, 50px);
}
</style>
