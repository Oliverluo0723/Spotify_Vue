<script setup lang="ts">
import { ref, h } from 'vue'
import { PlusOutlined, CheckOutlined } from '@ant-design/icons-vue'
const isAdd = ref<boolean>(false)

function ChangeIsAdd() {
  isAdd.value = !isAdd.value
}
</script>
<template>
  <a-tooltip>
    <template #title>從你的音樂庫中刪除</template>
    <a-button
      v-if="isAdd"
      @click="ChangeIsAdd"
      type="primary"
      shape="circle"
      :icon="h(CheckOutlined)"
    ></a-button>

    <a-button
      v-else="isAdd"
      @click="ChangeIsAdd"
      type="primary"
      shape="circle"
      :icon="h(PlusOutlined)"
    ></a-button>
  </a-tooltip>
</template>
<style lang="scss" scoped></style>
