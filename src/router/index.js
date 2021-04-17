import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import BlogContent from "@/views/BlogContent.vue";
import BlogDetail from "@/views/BlogDetail.vue";
import BlogEdit from "@/views/BlogEdit.vue";

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
  {
    path: "/edit",
    name: "BlogEdit",
    component: BlogEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
