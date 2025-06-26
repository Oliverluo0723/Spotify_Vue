<script setup lang="ts">
import { h } from 'vue'
import { PlusOutlined, ArrowsAltOutlined } from '@ant-design/icons-vue'
</script>
<template>
  <section>
    <div class="library-top">
      <a-flex justify="space-between" align="center">
        <h4>你的音樂庫</h4>
        <a-flex gap="small">
          <a-button type="primary" size="small" :icon="h(PlusOutlined)">建立</a-button>
          <ArrowsAltOutlined />
        </a-flex>
      </a-flex>
    </div>
    <div class="library-sub"></div>
  </section>
</template>
<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  .library-top {
    width: 100%;
  }
}
</style>
