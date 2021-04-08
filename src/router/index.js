import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import BlogContent from "@/views/BlogContent.vue";
import BlogDetail from "@/views/BlogDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/content",
    children: [
      {
        path: "/content",
        name: "BlogContent",
        component: BlogContent,
      },
      {
        path: "/detail",
        name: "BlogDetail",
        component: BlogDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
