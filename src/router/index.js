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
        name: "Archives",
        component: () => import("@/views/Archives.vue"),
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
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.requireAuth) {
    return {
      path: "/login",
    };
  }
});

export default router;
