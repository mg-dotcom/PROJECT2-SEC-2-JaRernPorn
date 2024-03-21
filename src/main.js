import './assets/main.css'

import { createApp } from 'vue'
// import HomePage from './components/homepage/HomePage.vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
