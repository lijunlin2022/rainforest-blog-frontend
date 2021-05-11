import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    redirect: "/content",
    children: [
      {
        path: "/content",
        name: "BlogContent",
        component: () => import("@/views/BlogContent.vue"),
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
    ],
  },
  {
    path: "/edit",
    name: "BlogEditor",
    component: () => import("@/views/BlogEditor.vue"),
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

router.beforeEach(() => {
  document.documentElement.scrollTop = 0;
});

export default router;
