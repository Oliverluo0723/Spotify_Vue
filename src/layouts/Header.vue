<script setup lang="ts">
import { h } from 'vue'
// UI
import { Input } from 'ant-design-vue'
// icon
import {
  SearchOutlined,
  HomeFilled,
  CustomerServiceOutlined,
  BellOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
import Spotify from '@/assets/spotify-1.svg'

const SpotifyIcon = Spotify
</script>
<template>
  <header>
    <div class="left">
      <img :src="SpotifyIcon" alt="SpotifyIcon" />
    </div>
    <div class="center">
      <a-tooltip>
        <template #title>首頁</template>
        <a-button type="primary" shape="circle" :icon="h(HomeFilled)"></a-button>
      </a-tooltip>
      <a-input style="width: 250px" placeholder="想聽" :suffix="h(CustomerServiceOutlined)">
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>
    </div>
    <div class="right">
      <BellOutlined />
      <TeamOutlined />
      <a-avatar>
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.center,
.right {
  display: flex;
  gap: 1rem;
}
</style>
