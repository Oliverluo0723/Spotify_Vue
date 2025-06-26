<script setup lang="ts">
import LibrarySection from '@/views/LibrarySection/LibrarySection.vue'
</script>

<template>
  <main>
    <a-row wrap="true" :gutter="[16, 16]">
      <a-col :xs="{ span: 6 }" :lg="{ span: 8 }" class="Home-col">
        <div class="col-content">
          <LibrarySection />
        </div>
      </a-col>
      <a-col :xs="{ span: 9 }" :lg="{ span: 8 }" class="Home-col">
        <div class="col-content">Hello</div>
      </a-col>
      <a-col :xs="{ span: 9 }" :lg="{ span: 8 }" class="Home-col">
        <div class="col-content">Hello</div>
      </a-col>
    </a-row>
  </main>
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
</style>
