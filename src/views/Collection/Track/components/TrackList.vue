<script setup lang="ts">
import { ref } from 'vue'
// icon
import { ClockCircleOutlined } from '@ant-design/icons-vue'
const TrackList = ref([
  {
    key: '1',
    name: 'エピローグメイド',
    album: '32',
    addedAt: '11小時前',
    duration: '4:15',
  },
])

const TrackThead = ref([
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: '標題',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '專輯',
    dataIndex: 'album',
    key: 'album',
  },
  {
    title: '新增日期',
    dataIndex: 'addedAt',
    key: 'addedAt',
  },
  {
    title: '時長',
    dataIndex: 'duration',
    key: 'duration',
  },
])
</script>
<template>
  <section>
    <a-table :dataSource="TrackList" :columns="TrackThead">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'duration'">
          <span><ClockCircleOutlined /></span>
        </template>
      </template>
    </a-table>
  </section>
</template>
<style lang="scss" scoped>
section {
  width: 100%;
  height: auto;
}
</style>
