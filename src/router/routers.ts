import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const router = createRouter({
  // vite.config.ts 中的環境變量 import.meta.env.BASE_URL
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
  ],
})

export default router
