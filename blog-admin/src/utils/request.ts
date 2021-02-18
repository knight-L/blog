/*
 * @Description: http拦截器
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-30 23:44:48
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-18 13:39:06
 */
import axios from "axios";
import { notification } from 'ant-design-vue';
import store from "../store/index";
import router from "../router/index";

// 创建 axios 实例
const request = axios.create({
    // API 请求的默认前缀
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 6000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error: { response: { status: number; data: { name: string; message: string; } }; message: string; }) => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = "错误请求";
                break;
            case 401:
                error.message = "未授权，请重新登录";
                store.commit('clearToken');
                router.replace("/login");
                break;
            case 403:
                error.message = "拒绝访问";
                break;
            case 404:
                error.message = "请求错误,未找到该资源";
                break;
            case 405:
                error.message = "请求方法未允许";
                break;
            case 408:
                error.message = "请求超时";
                break;
            case 500:
                error.message = "服务器端出错";
                break;
            case 501:
                error.message = "网络未实现";
                break;
            case 502:
                error.message = "网络错误";
                break;
            case 503:
                error.message = "服务不可用";
                break;
            case 504:
                error.message = "网络超时";
                break;
            case 505:
                error.message = "http版本不支持该请求";
                break;
            default:
                error.message = `未知错误${error.response.status}`;
        }
    } else {
        error.message = "连接到服务器失败";
    }
    notification.error({
        message: error.response.data.name || "Error",
        description: error.response.data.message || error.message,
    });
    return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use((config) => {
    // 向请求头添加token
    const token = store.state.token;
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers["Authorization"] = token;
    }
    return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response) => {
    return response.data;
}, errorHandler);

export default request;
