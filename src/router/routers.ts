import { createRouter, createWebHistory } from 'vue-router'

// layouts
import Home from '@/layouts/Home.vue'

// views
import AritistSection from '@/views/Artist/AritistSection.vue'

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
      redirect: '/home/aritist',
      children: [
        {
          path: 'aritist',
          name: 'aritist',
          component: AritistSection,
        },
      ],
    },
  ],
})

export default router
