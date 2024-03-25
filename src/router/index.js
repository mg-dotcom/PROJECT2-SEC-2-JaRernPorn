import { createRouter, createWebHistory } from "vue-router";
import CollectionFlashCard from "../views/CollectionFlashCard.vue";
import HomePage from "../views/HomePage.vue";
import NotFound from "../views/NotFound.vue";
import FlashCard from "../views/FlashCard.vue";
import HomePage from "../views/HomePage.vue";
import Categories from "../views/Categories.vue";
import CategoriesUnits from "../views/CategoriesUnits.vue";
import Game1 from "../views/Game1.vue";
import Game2 from "../views/Game2.vue";
import Game3 from "../views/Game3.vue";
import Game4 from "../views/Game4.vue";
import Result from "../views/Result.vue";

const history = createWebHistory();

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/:notfound(.*)",
    component: NotFound,
  },
  { path: "/home", name: "HomePage", component: HomePage },
  ,
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
  {
    path: "/flashcard-collection",
    name: "CollectionFlashCard",
    component: CollectionFlashCard,
  },
  {
    path: "/flashcard-collection/:name/:id/flashcards",
    name: "FlashCard",
    component: FlashCard,
  },
  // game route path
  {
    path: "/categories/:category/:cateIndex/unit/:unit/game1",
    name: "Game1",
    component: Game1,
  },
  {
    path: "/categories/:category/:cateIndex/unit/:unit/game2",
    name: "Game2",
    component: Game2,
  },
  {
    path: "/categories/:category/:cateIndex/unit/:unit/game3",
    name: "Game3",
    component: Game3,
  },
  {
    path: "/categories/:category/:cateIndex/unit/:unit/game4",
    name: "Game4",
    component: Game4,
  },
  {
    path: "/categories/:category/:cateIndex/unit/:unit/result",
    name: "Result",
    component: Result,
  },
];

const router = createRouter({ history, routes });
export default router;
