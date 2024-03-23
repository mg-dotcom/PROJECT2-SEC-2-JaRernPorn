import CategoriesUnits from '@/components/category/CategoriesUnits.vue'
import HomePage from '@/components/homepage/HomePage.vue'
import CollectionFlashCard from '@/components/collectionFlashcard/CollectionFlashCard.vue'
import Units from '@/components/category/Units.vue'
import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
import FlashCard from '@/components/Flashcard/FlashCard.vue'
const history = createWebHistory()
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/:notfound(.*)',
    component: NotFound
  },
  { path: '/home', name: 'HomePage', component: HomePage },
  { path: '/category', name: 'CategoriesUnits', component: CategoriesUnits },
  {
    path: '/category/units/:units',
    name: 'Units',
    component: Units
  },
  {
    path: '/flashcard-collection',
    name: 'CollectionFlashCard',
    component: CollectionFlashCard
  },
  {
    path: '/flashcard-collection/:name',
    name: 'FlashCard',
    component: FlashCard
  }
]
const router = createRouter({ history, routes })
export default router
