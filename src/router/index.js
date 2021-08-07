import { createRouter, createWebHistory } from "vue-router";
// import store from "../store";

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
        path: "/nDetail/:id",
        name: "NDetail",
        component: () => import("@/views/user/NDetail.vue"),
      },
      {
        path: "/list",
        name: "List",
        component: () => import("@/views/user/List.vue"),
      },
      {
        path: "/detail/:id",
        name: "Detail",
        component: () => import("@/views/user/Detail.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/user/NotFound.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "AHome",
    component: () => import("@/views/admin/AHome.vue"),
    redirect: "/admin/nList",
    children: [
      {
        path: "nList",
        name: "ANList",
        component: () => import("@/views/admin/ANList.vue"),
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

// router.beforeEach((to) => {
//   if (to.meta.requireAuth && store.getters.getLoginStatus === false) {
//     return {
//       path: "/login",
//     };
//   }
// });

export default router;
