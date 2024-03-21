import CategoriesUnits from '@/components/category/CategoriesUnits.vue'
import HomePage from '@/components/homepage/HomePage.vue'
import FlashCard from '@/components/FlashCard.vue'
import Units from '@/components/category/Units.vue'
import { createRouter, createWebHistory } from 'vue-router'
const history = createWebHistory()
const routes = [
  { path: '/', redirect: '/homepage' },
  { path: '/homepage', name: 'HomePage', component: HomePage },
  { path: '/category', name: 'CategoriesUnits', component: CategoriesUnits },
  {
    path: '/category/units/:units',
    name: 'Units',
    component: Units
  },
  { path: '/flashcard', name: 'Flashcard', component: FlashCard }
]
const router = createRouter({ history, routes })
export default router
