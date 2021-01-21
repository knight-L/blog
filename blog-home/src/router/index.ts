/*
 * @Description: 路由信息
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-18 20:25:39
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
        {
            path: '/',
            redirect:'/home'
        },
        {
            path: 'home',
            name: 'Home',
            component: () => import(/* webpackChunkName: "home" */ '../views/home/Index.vue')
        },
        {
            path: 'login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '../views/login/Index.vue')
        },
        {
            path: 'about',
            name: 'About',
            component: () => import(/* webpackChunkName: "about" */ '../views/about/Index.vue')
        }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
