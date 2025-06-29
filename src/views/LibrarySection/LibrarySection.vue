<script setup lang="ts">
import { h, ref } from 'vue'
// 組件
import Badge from '@/components/Badge.vue'
import LibraryList from './components/libraryList.vue'
// icon
import {
  PlusOutlined,
  ArrowsAltOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons-vue'

const BadgeItems = ref([
  { id: 101, itemName: '播放清單' },
  { id: 102, itemName: '最愛藝人' },
  { id: 103, itemName: '專輯' },
  { id: 104, itemName: 'Podcast和節目' },
])
</script>
<template>
  <section>
    <div class="library-top">
      <a-flex justify="space-between" align="center">
        <h4 class="hidden lg:block">你的音樂庫</h4>
        <a-flex gap="small">
          <a-button type="primary" size="small" :icon="h(PlusOutlined)">建立</a-button>
          <span class="hidden lg:block">
            <a-button type="primary" circle size="small" :icon="h(ArrowsAltOutlined)"></a-button>
          </span>
        </a-flex>
      </a-flex>
    </div>
    <div class="library-sub hidden lg:block mt-2">
      <ul>
        <a-flex gap="small">
          <li v-for="item in BadgeItems" :key="item.id">
            <Badge>{{ item.itemName }}</Badge>
          </li>
        </a-flex>
      </ul>
    </div>
    <div class="library-search mt-2 hidden lg:block">
      <a-flex justify="space-between" align="center">
        <a-button type="link" size="small" :icon="h(SearchOutlined)"></a-button>
        <div>
          <a-button type="link" :icon="h(UnorderedListOutlined)"> 最近播放 </a-button>
        </div>
      </a-flex>
    </div>
    <div class="library-list mt-2">
      <LibraryList />
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  .library-top {
    width: 100%;
  }
  .library-sub {
    width: 100%;
  }
  .library-search {
    width: 100%;
  }
  .library-list {
    width: 100%;
    height: auto;
  }
}
</style>
