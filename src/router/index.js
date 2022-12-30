import { createRouter, createWebHistory } from "vue-router";
import ItemsView from "../views/ItemsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ItemsView,
    },
  ],
});

export default router;
