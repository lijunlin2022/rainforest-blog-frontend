import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    redirect: "/overview",
    children: [
      {
        path: "/overview",
        name: "BlogOverview",
        component: () => import("@/views/BlogOverview.vue"),
      },
      {
        path: "/notebook",
        name: "BlogNotebook",
        component: () => import("@/views/BlogNotebook.vue"),
      },
      {
        path: "/detail",
        name: "BlogDetail",
        component: () => import("@/views/BlogDetail.vue"),
      },
      {
        path: "/archives",
        name: "BlogArchives",
        component: () => import("@/views/BlogArchives.vue"),
      },
      {
        path: "/interface",
        name: "BlogInterface",
        component: () => import("@/views/BlogInterface.vue"),
      },
    ],
  },
  {
    path: "/manage",
    name: "BlogManage",
    component: () => import("@/views/BlogManage.vue"),
    redirect: "/edit",
    children: [
      {
        path: "/notebook",
        name: "AdminNotebook",
        component: () => import("@/views/admin/AdminNotebook.vue"),
      },
      {
        path: "/edit",
        name: "BlogEditor",
        component: () => import("@/views/BlogEditor.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "BlogLogin",
    component: () => import("@/views/BlogLogin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
