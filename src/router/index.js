import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CategoriesUnits from "../views/CategoriesUnits.vue";
const history = createWebHistory();
const routes = [
  // default route path
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    // default route path
    path: "/",
    redirect: "/",
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesUnits,
  },
];

const router = createRouter({ history, routes });
export default router;
