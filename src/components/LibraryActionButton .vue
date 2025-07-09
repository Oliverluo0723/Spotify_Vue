<script setup lang="ts">
import { ref, h, onMounted, computed } from 'vue'
import { message } from 'ant-design-vue'
import { PlusOutlined, CheckOutlined } from '@ant-design/icons-vue'
import { getCheckUsersSavedTracks } from '@/api/TrackApi'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = Array.isArray(route.params.id) ? route.params.id[0] : (route.params.id ?? '')

const isAdd = ref<boolean>(false)

//
async function handleGetCheckUsersSavedTracks(): Promise<boolean | undefined> {
  if (!id) return false
  const res = await getCheckUsersSavedTracks(id)
  if (res) {
    return res[0]
  }
  return undefined
}

onMounted(async () => {
  const res = await handleGetCheckUsersSavedTracks()
  isAdd.value = res ?? false
})
//

//
const [messageApi, contextHolder] = message.useMessage()

function ChangeIsAdd() {
  isAdd.value = !isAdd.value
  messageApi.info(isAdd.value ? '新增成功' : '刪除成功')
}
//

const tooltipTitle = computed(() => {
  return isAdd.value ? '從你的音樂庫中刪除' : '從你的音樂庫中新增'
})
</script>

<template>
  <div>
    <component :is="contextHolder" />
    <a-tooltip>
      <template #title>{{ tooltipTitle }}</template>
      <a-button
        v-if="isAdd"
        @click="ChangeIsAdd"
        type="primary"
        shape="circle"
        :icon="h(CheckOutlined)"
      />
      <a-button v-else @click="ChangeIsAdd" type="primary" shape="circle" :icon="h(PlusOutlined)" />
    </a-tooltip>
  </div>
</template>
