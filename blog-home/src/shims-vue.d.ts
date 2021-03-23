/*
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-23 15:27:40
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-23 21:16:45
 */
/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module 'funlazy'