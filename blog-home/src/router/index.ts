/*
 * @Description: 路由信息
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-27 15:38:57
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
            name: 'Home',
            component: () => import(/* webpackChunkName: "home" */ '../views/home/Index.vue'),
            meta: {
                title: "首页", //标题
                icon: "",//图标
                roles: [], //访问权限控制
                hidden: false,//不渲染到菜单
            },
        },
         {
            path: 'featured',
            name: 'Featured',
            component: () => import(/* webpackChunkName: "featured" */ '../views/featured/Index.vue'),
            meta: {
                title: "精选", //标题
                icon: "",//图标
                roles: [], //访问权限控制
                hidden: false,//不渲染到菜单
            },
        },
         {
            path: 'works',
            name: 'Works',
            component: () => import(/* webpackChunkName: "works" */ '../views/works/Index.vue'),
            meta: {
                title: "作品", //标题
                icon: "",//图标
                roles: [], //访问权限控制
                hidden: false,//不渲染到菜单
            },
        },
         {
            path: 'resources',
            name: 'Resources',
            component: () => import(/* webpackChunkName: "resources" */ '../views/resources/Index.vue'),
            meta: {
                title: "资源导航", //标题
                icon: "",//图标
                roles: [], //访问权限控制
                hidden: false,//不渲染到菜单
            },
        },
         {
            path: 'friendship',
            name: 'Friendship',
            component: () => import(/* webpackChunkName: "friendship" */ '../views/friendship/Index.vue'),
            meta: {
                title: "友情链接", //标题
                icon: "",//图标
                roles: [], //访问权限控制
                hidden: false,//不渲染到菜单
            },
        },
        {
            path: 'login',
            name: 'Login',
            component: () => import(/* webpackChunkName: "login" */ '../views/login/Index.vue'),
            meta: {
                title: "登录", //标题
                icon: "",//图标
                roles: [], //访问权限控制
                hidden: true,//不渲染到菜单
            },
        },
        {
            path: 'about',
            name: 'About',
            component: () => import(/* webpackChunkName: "about" */ '../views/about/Index.vue'),
            meta: {
                title: "关于", //标题
                icon: "",//图标
                roles: [], //访问权限控制
                hidden: true,//不渲染到菜单
            },
        },
        {
            path: 'test',
            name: 'Test',
            component: () => import(/* webpackChunkName: "test" */ '../views/test/Index.vue'),
            meta: {
                title: "测试", //标题
                icon: "",//图标
                roles: [], //访问权限控制
                hidden: true,//不渲染到菜单
            },
        }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
