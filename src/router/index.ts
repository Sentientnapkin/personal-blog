import { createRouter, createWebHistory } from 'vue-router'
import BlogPost from '@/components/BlogPost.vue'
import HomePage from '@/components/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/blog/:id',
      component: BlogPost,
      props: true,
    }
  ]
})

export default router
