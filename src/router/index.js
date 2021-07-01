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
        name: "Overview",
        component: () => import("@/views/Overview.vue"),
      },
      {
        path: "/notebookList",
        name: "NotebookList",
        component: () => import("@/views/NotebookList.vue"),
      },
      {
        path: "/notebookDetail",
        name: "NotebookDetail",
        component: () => import("@/views/NotebookDetail.vue"),
      },
      {
        path: "/list",
        name: "NoteList",
        component: () => import("@/views/NoteList.vue"),
      },
      {
        path: "/detail",
        name: "NoteDetail",
        component: () => import("@/views/NoteDetail.vue"),
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
    path: "/admin/manage",
    name: "AdminManage",
    component: () => import("@/views/admin/AdminManage.vue"),
    redirect: "/admin/notebook",
    children: [
      {
        path: "/admin/notebook",
        name: "AdminNotebook",
        component: () => import("@/views/admin/AdminNotebook.vue"),
      },
      {
        path: "/admin/edit",
        name: "AminEditor",
        component: () => import("@/views/admin/AdminEditor.vue"),
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
