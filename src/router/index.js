import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Categories from "../views/Categories.vue";
import CategoriesUnits from "../views/CategoriesUnits.vue";
import Game from "../views/Game.vue";
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
  // categories route path
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  // categories unit route path
  {
    path: "/categories/:category/:cateIndex",
    name: "CategoriesUnits",
    component: CategoriesUnits,
  },
  // game route path
  {
    path: "/categories/:category/:cateIndex/game/:unit",
    name: "Game",
    component: Game,
  },
];

const router = createRouter({ history, routes });
export default router;
