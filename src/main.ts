import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// v-hover
import { hover } from '@/directives/v-hover'
import '@/global.css'

import App from './App.vue'
import router from './router/routers'

const app = createApp(App)

app.use(PerfectScrollbarPlugin)
// pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.directive('hover', hover)
app.use(router)

app.mount('#app')
