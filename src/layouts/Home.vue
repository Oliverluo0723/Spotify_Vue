<script setup lang="ts">
import { RouterView } from 'vue-router'
// Layouts
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
// views
import LibrarySection from '@/views/LibrarySection/LibrarySection.vue'
import { getFollowedArtists } from '@/api/UserApi'

getFollowedArtists()
</script>

<template>
  <Header />
  <main>
    <a-row wrap :gutter="[16, 16]">
      <a-col :xs="{ span: 4 }" :lg="{ span: 6 }" class="Home-col">
        <div class="col-content">
          <LibrarySection />
        </div>
      </a-col>
      <a-col :xs="{ span: 16 }" :lg="{ span: 12 }" class="Home-col">
        <div class="col-content">
          <PerfectScrollbar>
            <RouterView />
          </PerfectScrollbar>
        </div>
      </a-col>
      <a-col :xs="{ span: 4 }" :lg="{ span: 6 }" class="Home-col">
        <div class="col-content">Hello</div>
      </a-col>
    </a-row>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100%;
}

.col-content {
  padding: 8px;
  background-color: #ededed;
  border-radius: 6px;
}

// 100svh - Header高度 - Footer高度
.ps {
  height: calc(100svh - 60px - 72px);
}
</style>
