import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router' // 导入的是类型

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('@/views/login/login.vue') },
  { path: '/main', component: () => import('@/views/main/main.vue') }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

export default router
