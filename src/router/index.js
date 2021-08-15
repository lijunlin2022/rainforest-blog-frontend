import { createRouter, createWebHistory } from "vue-router";
// import store from "../store";

const routes = [
  {
    path: "/",
    component: () => import("@/views/user/Home.vue"),
    redirect: "/overview",
    meta: {
      title: "Overview",
    },
    children: [
      {
        path: "/overview",
        component: () => import("@/views/user/overview/Overview.vue"),
      },
      {
        path: "/search",
        component: () => import("@/views/user/search/Search.vue"),
      },
      {
        path: "/nDetail/:id",
        component: () => import("@/views/user/nDetail/NDetail.vue"),
        meta: {
          title: "Notebook",
        },
      },
      {
        path: "/detail/:id",
        component: () => import("@/views/user/detail/Detail.vue"),
        meta: {
          title: "Note",
        },
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
    name: "Home",
    component: () => import("@/views/admin/Home.vue"),
    meta: {
      title: "Admin",
    },
    redirect: "/admin/nList",
    children: [
      {
        path: "nList",
        name: "NList",
        component: () => import("@/views/admin/nList/NList.vue"),
        meta: {
          title: "NotebookList",
        },
      },
      {
        path: "list/:id",
        component: () => import("@/views/admin/list/List.vue"),
        meta: {
          title: "NoteList",
        },
      },
      {
        path: "detail/:pid/:id",
        component: () => import("@/views/admin/detail/Detail.vue"),
        meta: {
          title: "Detail",
        },
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
