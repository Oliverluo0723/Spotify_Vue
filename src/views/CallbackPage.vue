<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { SpotifyAuth } from '@/services/spotifyAuth'
import { SpotifyTokenService } from '@/services/spotifyTokenServices'

const router = useRouter()
const loading = ref(true)
const error = ref('')

const retryAuth = (): void => {
  SpotifyAuth.requestAuthorization()
}

onMounted(async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    const state = urlParams.get('state')
    const errorParam = urlParams.get('error')

    // 檢查是否有錯誤
    if (errorParam) {
      throw new Error(`Spotify 授權被拒絕: ${errorParam}`)
    }

    // 驗證必要參數
    if (!code) {
      throw new Error('未獲得授權碼')
    }

    if (!state) {
      throw new Error('缺少 state 參數')
    }

    // 驗證 state 參數
    if (!SpotifyAuth.validateState(state)) {
      throw new Error('State 驗證失敗，可能存在安全風險')
    }

    // 交換 access token
    await SpotifyTokenService.exchangeCodeForTokens(code, state)

    // 清除 state
    SpotifyAuth.clearState()

    loading.value = false

    // 跳轉到主頁面
    setTimeout(() => {
      router.push('/home')
    }, 1500)
  } catch (err) {
    console.error('授權回調處理失敗:', err)
    error.value = err instanceof Error ? err.message : '未知錯誤'
    loading.value = false
  }
})
</script>

<template>
  <div class="callback-container">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>正在處理 Spotify 授權...</p>
    </div>
    <div v-else-if="error" class="error">
      <h3>授權失敗</h3>
      <p>{{ error }}</p>
      <button @click="retryAuth">重新嘗試</button>
    </div>
    <div v-else class="success">
      <h3>授權成功！</h3>
      <p>正在跳轉到主頁面...</p>
    </div>
  </div>
</template>

<style scoped>
.callback-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

.loading,
.error,
.success {
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1db954;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error {
  background-color: #fee;
  color: #c33;
}

.success {
  background-color: #efe;
  color: #3a3;
}
</style>
