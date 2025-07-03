<script setup lang="ts">
import LoginButton from '@/components/LoginButton.vue'
import { SpotifyAuth } from '@/services/spotifyAuth'

function loginWithSpotify(): void {
  SpotifyAuth.requestAuthorization()
}
</script>
<template>
  <div class="login-container">
    <!-- <LoginButton /> -->
    <button @click="loginWithSpotify">使用spotify登入</button>
  </div>
</template>
<style lang="scss" scoped>
.login-container {
  width: 100dvw;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
