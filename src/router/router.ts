import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SocialView from '@/views/SocialView.vue'
import AboutView from '@/views/AboutView.vue'
import GuideView from '@/views/GuideView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/social',
      name: 'social',
      component: SocialView,
    },
    {
      path: '/guide',
      name: 'guide',
      component: GuideView,
    },
  ],
})

export default router
