import CategoriesUnits from '../views/CategoriesUnits.vue'
import CollectionFlashCard from '../views/CollectionFlashCard.vue'
import HomePage from '../views/HomePage.vue'
// import Units from '../components/category/Units.vue'
import NotFound from '../views/NotFound.vue'
import FlashCard from '../views/FlashCard.vue'

import { createRouter, createWebHistory } from 'vue-router'
const history = createWebHistory()

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/:notfound(.*)',
    component: NotFound
  },
  { path: '/home', name: 'HomePage', component: HomePage },
  { path: '/category', name: 'CategoriesUnits', component: CategoriesUnits },
  ,
  {
    path: '/flashcard-collection',
    name: 'CollectionFlashCard',
    component: CollectionFlashCard
  },
  {
    path: '/flashcard-collection/:name/:id/flashcards',
    name: 'FlashCard',
    component: FlashCard
  }
]

const router = createRouter({ history, routes })
export default router
