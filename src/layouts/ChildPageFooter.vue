<script setup lang="ts">
import { ref } from 'vue'
const footerItems = ref([
  {
    title: '公司簡介',
    children: [
      { name: '關於我們', url: 'https://www.spotify.com/tw/about-us/contact/' },
      { name: '職位空缺', url: 'https://www.lifeatspotify.com/' },
      { name: 'For the Record', url: '/for-the-record' },
    ],
  },
  {
    title: '社群',
    children: [
      { name: '藝人專屬', url: 'https://artists.spotify.com/home' },
      { name: '開發商', url: '/developers' },
      { name: '廣告宣傳', url: '/advertising' },
      { name: '投資者', url: '/investors' },
      { name: '供應商', url: '/suppliers' },
    ],
  },
  {
    title: '常用連結',
    children: [
      { name: '支援', url: '/support' },
      { name: '免費行動版 App', url: '/free-mobile-app' },
      { name: '熱門國家/地區', url: '/regions' },
    ],
  },
  {
    title: 'Spotify 方案',
    children: [
      { name: 'Premium Individual', url: '/premium-individual' },
      { name: 'Premium Duo', url: '/premium-duo' },
      { name: 'Premium Family', url: '/premium-family' },
      { name: 'Premium Student', url: '/premium-student' },
      { name: 'Spotify Free', url: '/free' },
    ],
  },
])
</script>
<template>
  <footer class="pt-4">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="4" v-for="item in footerItems">
        <a-flex vertical gap="small">
          <div>{{ item.title }}</div>
          <ul>
            <a-flex vertical gap="small">
              <li v-for="citem in item.children">
                <a :href="citem.url">{{ citem.name }}</a>
              </li>
            </a-flex>
          </ul>
        </a-flex>
      </a-col>
      <a-col :span="4">123</a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: 100%;
  height: auto;
  border-top: 1px solid #3c3c3c;
}
</style>
