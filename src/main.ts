import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'
// v-hover
import { hover } from '@/directives/v-hover'
import '@/global.css'

import App from './App.vue'
import router from './router/routers'

const app = createApp(App)

app.use(PerfectScrollbarPlugin)
app.use(createPinia())
app.directive('hover', hover)
app.use(router)

app.mount('#app')
