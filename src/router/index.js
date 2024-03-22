import CategoriesUnits from '@/components/category/CategoriesUnits.vue'
import HomePage from '@/components/homepage/HomePage.vue'
import FlashCard from '@/components/flashcard/FlashCard.vue'
import CollectionFlashCard from '@/components/collectionFlashcard/CollectionFlashCard.vue'
import Units from '@/components/category/Units.vue'
import NotFound from '@/components/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
const history = createWebHistory()
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'HomePage', component: HomePage },
  { path: '/category', name: 'CategoriesUnits', component: CategoriesUnits },
  {
    path: '/category/units/:units',
    name: 'Units',
    component: Units
  },
  {
    path: '/flashcard',
    name: 'CollectionFlashCard',
    component: CollectionFlashCard
  },
  {
    path: '/:notfound(.*)',
    component: NotFound
  }
]
const router = createRouter({ history, routes })
export default router
