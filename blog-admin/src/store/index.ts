/*
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-30 21:19:07
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-06 23:21:42
 */
import { createStore } from 'vuex';
import modules from './modules';

export default createStore({
    state: {
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        setToken(state: { token: string }, token: string): void {
            state.token = token;
            localStorage.setItem("token", token);
        },
        clearToken(state: { token: string }): void {
            state.token = '';
            localStorage.removeItem("token");
        },
    },
    actions: {
    },
    modules
})