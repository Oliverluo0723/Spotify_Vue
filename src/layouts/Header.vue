<script setup lang="ts">
import { h, ref, onMounted, computed, watch } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import { SearchForItem } from '@/api/SearchApi'
// icon
import {
  SearchOutlined,
  HomeFilled,
  CustomerServiceOutlined,
  BellOutlined,
  TeamOutlined,
} from '@ant-design/icons-vue'
import Spotify from '@/assets/spotify-1.svg'

const SpotifyIcon = Spotify
const iptValue = ref<string>('')

watch(iptValue, (newIpt) => {}, { immediate: true })

const menuItems = ref([
  { id: 101, menuItem: '帳戶', Url: '' },
  { id: 102, menuItem: '個人檔案', Url: '' },
  { id: 103, menuItem: '支援', Url: '' },
  { id: 104, menuItem: '下載', Url: '' },
  { id: 105, menuItem: '設定', Url: '' },
])

const userStore = useUserStore()

const { profile } = storeToRefs(userStore)

const userImg = computed(() => {
  return profile.value?.images?.[1]?.url || profile.value?.images?.[0]?.url || ''
})

async function testSearch() {
  const result = await SearchForItem({
    q: 'Twice',
    type: ['artist'],
    market: 'TW',
    limit: 10,
  })
}

onMounted(async () => {
  userStore.fetchProfile()
  // await testSearch()
})
</script>
<template>
  <header>
    <div class="left">
      <img :src="SpotifyIcon" alt="SpotifyIcon" />
    </div>
    <div class="center">
      <a-tooltip>
        <template #title>首頁</template>
        <RouterLink to="/home">
          <a-button type="primary" shape="circle" :icon="h(HomeFilled)" />
        </RouterLink>
      </a-tooltip>
      <a-input
        v-model:value="iptValue"
        style="width: clamp(10rem, 35vw, 20rem)"
        placeholder="想聽什麼呢"
        :suffix="h(CustomerServiceOutlined)"
      >
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>
    </div>
    <div class="right">
      <!-- 通知 -->
      <a-tooltip>
        <template #title>通知</template>
        <BellOutlined />
      </a-tooltip>
      <!-- 好友活動 -->
      <a-tooltip>
        <template #title>好友活動</template>
        <TeamOutlined />
      </a-tooltip>
      <a-dropdown>
        <a-avatar :src="userImg"> </a-avatar>
        <template #overlay>
          <a-menu>
            <a-menu-item v-for="item in menuItems" :key="item.id">
              <a :href="item.Url">{{ item.menuItem }}</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
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
