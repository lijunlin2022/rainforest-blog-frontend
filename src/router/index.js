import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: Home,
    redirect: '/welcome',
    children: [
      {
        name: 'Welcome',
        path: '/welcome',
        meta: {
          title: '欢迎你'
        },
        component: () => import('@/views/Welcome.vue')
      },
      {
        name: 'Dir',
        path: '/dir',
        meta: {
          title: '文件管理'
        },
        component: () => import('@/views/Dir.vue')
      },
      {
        name: 'File',
        path: '/file/:_id',
        meta: {
          title: '新建文件'
        },
        component: () => import('@/views/File.vue')
      },
      {
        name: 'User',
        path: '/user',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/views/User.vue')
      }
    ]
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
