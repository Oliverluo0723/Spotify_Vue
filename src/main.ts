import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/global.css'

import App from './App.vue'
import router from './router/routers'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
