/*
 * @Description: 入口文件
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-30 21:19:07
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-03 20:10:32
 */
import { createApp } from 'vue';
import App from './App.vue';
import { Layout, Slider, Menu, Button, Table } from 'ant-design-vue';
import router from './router';
import store from './store';

createApp(App)
    .use(store)
    .use(router)
    .use(Layout)
    .use(Slider)
    .use(Menu)
    .use(Button)
    .use(Table)
    .mount('#app');
