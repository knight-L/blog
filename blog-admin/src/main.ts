/*
 * @Description: 入口文件
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-30 21:19:07
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-10 18:49:51
 */
import { createApp } from 'vue';
import App from './App.vue';
import { Layout, Row, Col, Slider, Menu, Button, Table, Form, Input, Steps, Select } from 'ant-design-vue';
import router from './router';
import store from './store';

createApp(App)
    .use(store)
    .use(router)
    .use(Layout)
    .use(Row)
    .use(Col)
    .use(Slider)
    .use(Menu)
    .use(Button)
    .use(Table)
    .use(Form)
    .use(Input)
    .use(Steps)
    .use(Select)
    .mount('#app');
