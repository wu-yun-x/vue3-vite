import { createRouter, createWebHistory } from 'vue-router'
// src / router / index.js

const routes = [
  {
    // 使用layout布局（头部，侧边导航，tag导航标签）的内页都放这里
    path: '/',
    name: 'layout',
    redirect: '/login',
    component: () => import('@/layout/Index.vue'),
    children: [
      {
        // 有了欢迎光临，动态路由再也不怕没有首页了
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/views/Welcome/Index.vue')
      },
      {
        // 又要keep-alive，又要刷新，只能靠这个重定向到空白页面，然后router.replace刷新了
        path: '/redirect/:pathMatch(.*)*',
        name: 'redirect',
        component: () => import('@/views/Redirect/Index.vue')
      },
      {
        // 404页面有了，403, 500有没必要？
        path: '/404',
        name: 'notfound',
        component: () => import('@/views/Error/NotFound.vue')
      }
      // { // 为什么写了要注释掉。写是因为404需要动态匹配并重定向才行。注释掉是因为动态路由的原因，把这个路由用router.addRoute的方式引入进来了。
      //   path: '/:pathMatch(.*)',
      //   name: '404',
      //   redirect: '/404',
      //   component: () => import('@/views/Error/NotFound.vue')
      // }
    ]
  },
  {
    // 非内页，不需要layout布局的放外面，如登录，大屏等
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
