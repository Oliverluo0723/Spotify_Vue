<script setup lang="ts">
import { h, ref } from 'vue'
import { PlusOutlined, ArrowsAltOutlined } from '@ant-design/icons-vue'
import Badge from '@/components/Badge.vue'

const BadgeItems = ref([
  { id: 1, itemName: '播放清單', navigationLink: '/' },
  { id: 2, itemName: '最愛藝人', navigationLink: '/' },
  { id: 3, itemName: '專輯', navigationLink: '/' },
  { id: 4, itemName: 'Podcast和節目', navigationLink: '/' },
])
</script>
<template>
  <section>
    <div class="library-top">
      <a-flex justify="space-between" align="center">
        <h4>你的音樂庫</h4>
        <a-flex gap="small">
          <a-button type="primary" size="small" :icon="h(PlusOutlined)">建立</a-button>
          <a-button type="primary" circle size="small" :icon="h(ArrowsAltOutlined)"></a-button>
        </a-flex>
      </a-flex>
    </div>
    <div class="library-sub">
      <ul>
        <a-flex gap="small">
          <li v-for="item in BadgeItems" :key="item.id">
            <Badge>{{ item.itemName }}</Badge>
          </li>
        </a-flex>
      </ul>
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
}
</style>
