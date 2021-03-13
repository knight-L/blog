/*
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-30 21:19:07
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-13 10:29:42
 */
/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '@kangc/v-md-editor';
declare module '@kangc/v-md-editor/lib/theme/github.js';
