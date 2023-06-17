// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name:"home",
    component: () => import('@/views/Home.vue'),
    
  },
  {
    path: '/about',
    name:"about",
    component: () => import('@/views/About.vue'),
    
  },

  {
    path: '/menu',
    name:"Menu",
    component: () => import('@/views/Menu.vue'),
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
