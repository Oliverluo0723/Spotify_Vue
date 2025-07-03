import { createRouter, createWebHistory } from 'vue-router'
import { SpotifyAuth } from '@/services/spotifyAuth'

// layouts
import Home from '@/layouts/Home.vue'

// views
import LoginPage from '@/views/LoginPage.vue'
import CallbackPage from '@/views/CallbackPage.vue'
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
      path: '/callback',
      component: CallbackPage,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'aritist:id',
          name: 'aritist',
          component: AritistSection,
          meta: { requiresAuth: true },
        },
        {
          path: 'track',
          name: 'track',
          component: TrackPage,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
})

// 路由守衛
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.meta.requiresAuth
//   const isAuthenticated = SpotifyAuth.isAuthenticated()

//   if (requiresAuth && !isAuthenticated) {
//     next('/login')
//   } else if (to.path === '/login' && isAuthenticated) {
//     next('/home')
//   } else {
//     next()
//   }
// })

export default router
