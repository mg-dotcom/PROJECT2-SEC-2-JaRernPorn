import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CategoriesUnits from "../views/CategoriesUnits.vue";
import Game1 from "../views/Game1.vue";
const history = createWebHistory();

const routes = [
  // default route path
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    // default route path
    path: "/",
    redirect: "/",
  },
  {
    path: "/categories",
    name: "Categories",
    component: CategoriesUnits,
  },
  {
    path: "/game1/:unit",
    name: "Game1",
    component: Game1,
  },
];

const router = createRouter({ history, routes });
export default router;
