import HomePage from '@/components/homepage/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
const history = createWebHistory()
const routes = [{ path: '/', name: 'HomePage', component: HomePage }]
const router = createRouter({ history, routes })
export default router 
