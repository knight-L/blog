/*
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-23 15:27:40
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-23 15:35:27
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
