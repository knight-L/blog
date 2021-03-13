/*
 * @Description: 入口文件
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-30 21:19:07
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-22 22:11:38
 */
import { createApp } from 'vue';
import App from './App.vue';
import { Layout, Row, Col, Slider, Menu, Button, Table, Form, Input, Steps, Select } from 'ant-design-vue';
import router from './router';
import store from './store';
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

VMdEditor.use(githubTheme);

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
    .use(VMdEditor)
    .mount('#app');
