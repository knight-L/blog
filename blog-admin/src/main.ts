/*
 * @Description: 入口文件
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-30 21:19:07
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-05 23:35:29
 */
import { createApp } from 'vue';
import App from './App.vue';
import { Layout, Slider, Menu, Button, Table, Form, Input } from 'ant-design-vue';
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
    .use(Form)
    .use(Input)
    .mount('#app');
