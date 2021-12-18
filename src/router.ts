import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/ticket",
      name: "Ticket",
      component: () => import("@/pages/TicketPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "Home" },
    },
  ],
});
