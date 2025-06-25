import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '../components/HomePage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
