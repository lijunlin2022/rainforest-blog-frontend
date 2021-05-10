import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import BlogContent from "@/views/BlogContent.vue";
import BlogDetail from "@/views/BlogDetail.vue";
import BlogEditor from "@/views/BlogEditor.vue";
import BlogLogin from "@/views/BlogLogin.vue";
import BlogArchives from "@/views/BlogArchives.vue";

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
      {
        path: "/archives",
        name: "BlogArchives",
        component: BlogArchives,
      },
    ],
  },
  {
    path: "/edit",
    name: "BlogEditor",
    component: BlogEditor,
  },
  {
    path: "/login",
    name: "BlogLogin",
    component: BlogLogin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
