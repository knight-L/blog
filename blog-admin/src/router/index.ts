/*
 * @Description: 路由入口文件
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-30 21:19:07
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-31 18:52:10
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '../views/layout/Layout.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/',
                redirect: '/dashboard'
            },
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/Dashboard.vue')
            },
            {
                path: 'articles',
                name: 'Articles',
                component: () => import(/* webpackChunkName: "articles" */ '../views/articles/Articles.vue')
            },
            {
                path: 'tags',
                name: 'Tags',
                component: () => import(/* webpackChunkName: "tags" */ '../views/tags/Tags.vue')
            },
            {
                path: 'users',
                name: 'Users',
                component: () => import(/* webpackChunkName: "users" */ '../views/users/Users.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
