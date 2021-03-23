/*
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-23 15:27:40
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-23 16:22:17
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "tailwindcss/tailwind.css"
//import '@/styles/tailwind.css'

createApp(App).use(router).mount('#app')
