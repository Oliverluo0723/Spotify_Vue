import { createRouter, createWebHistory } from 'vue-router'

// layouts
import Home from '@/layouts/Home.vue'

// views
import LoginPage from '@/views/LoginPage.vue'
import AritistSection from '@/views/Artist/AritistSection.vue'
import TrackPage from '@/views/Collection/Track/TrackPage.vue'

const router = createRouter({
  // vite.config.ts 中的環境變量 import.meta.env.BASE_URL
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'aritist:id',
          name: 'aritist',
          component: AritistSection,
        },
        {
          path: 'track',
          name: 'track',
          component: TrackPage,
        },
      ],
    },
  ],
})

export default router
