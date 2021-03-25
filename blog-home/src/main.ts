/*
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-23 15:27:40
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-25 11:50:22
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "tailwindcss/tailwind.css"
import lazyload from "./plugins/lazyload"
//import '@/styles/tailwind.css'

createApp(App).use(router).use(lazyload).mount('#app')
