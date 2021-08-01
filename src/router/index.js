import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/user/Home.vue"),
    redirect: "/overview",
    children: [
      {
        path: "/overview",
        name: "Overview",
        component: () => import("@/views/user/Overview.vue"),
      },
      {
        path: "/nList",
        name: "NList",
        component: () => import("@/views/user/NList.vue"),
      },
      {
        path: "/nDetail",
        name: "NDetail",
        component: () => import("@/views/user/NDetail.vue"),
      },
      {
        path: "/list",
        name: "List",
        component: () => import("@/views/user/List.vue"),
      },
      {
        path: "/detail",
        name: "Detail",
        component: () => import("@/views/user/Detail.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/admin/Admin.vue"),
    redirect: "/admin/notebook",
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: "/admin/notebook",
        name: "AdminNotebook",
        component: () => import("@/views/admin/AdminNotebook.vue"),
      },
      {
        path: "/admin/note",
        name: "AdminNote",
        component: () => import("@/views/admin/AdminNote.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/user/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.requireAuth && store.getters.getLoginStatus === false) {
    return {
      path: "/login",
    };
  }
});

export default router;
