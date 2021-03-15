/*
 * @Description: 入口文件
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-15 17:13:43
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/styles/animations.scss';
import '@/styles/tailwind.css';
// import "tailwindcss/tailwind.css"; // 这种方式引入页面会很卡

createApp(App).use(router).mount('#app')
