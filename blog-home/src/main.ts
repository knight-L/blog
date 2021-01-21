/*
 * @Description: 入口文件
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-20 21:02:04
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/styles/variables.scss';
import "tailwindcss/tailwind.css"

createApp(App).use(router).mount('#app')
