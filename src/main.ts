import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'
import '@/global.css'

import App from './App.vue'
import router from './router/routers'

const app = createApp(App)

app.use(PerfectScrollbarPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
