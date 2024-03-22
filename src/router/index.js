import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/homepage/HomePage.vue'
import CategoriesUnits from '@/components/category/CategoriesUnits.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: HomePage
  },
  { path: '/PlayGame', component: CategoriesUnits }
]

const router = createRouter({ history, routes })
export default router
