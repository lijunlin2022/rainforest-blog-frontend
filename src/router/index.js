import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/components/admin/Admin.vue'
import Home from '@/components/tourist/Home..vue'

const routes = [
  {
    name: 'Admin',
    path: '/admin',
    meta: {
      title: '首页'
    },
    component: Admin,
    redirect: '/admin/dir',
    children: [
      {
        name: 'Dir',
        path: 'dir',
        meta: {
          title: '文件管理'
        },
        component: () => import('@/views/admin/Dir.vue')
      },
      {
        name: 'File',
        path: 'file/:_id',
        meta: {
          title: '新建文件'
        },
        component: () => import('@/views/admin/File.vue')
      }
    ]
  },
  {
    name: 'Home',
    path: '/',
    meta: {
      title: '主页'
    },
    component: Home,
    redirect: '/overview',
    children: [
      {
        name: 'Overview',
        path: 'overview',
        meta: {
          title: '概览'
        },
        component: () => import('@/views/tourist/Overview.vue')
      },
      {
        name: 'Dir',
        path: 'dir/:id/:name',
        meta: {
          title: '文件夹'
        },
        component: () => import('@/views/tourist/Dir.vue')
      }
    ]
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/admin/Login.vue')
  },
  {
    name: 'Test',
    path: '/test',
    component: () => import('@/components/Test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
