/*
 * @Description: 用户相关api
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-31 00:12:47
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-06 23:17:33
 */
import request from "@/utils/request";
import { User, UserListQuery } from "./interface";

/**
 * @description: 创建用户
 * @param {*} 
 * @return {*}
 * @author: Knight
 */
export function create(data: User): Promise<any> {
    return request({
        url: "/api/v1.0/user",
        method: "post",
        data: data
    });
}

/**
 * @description: 获取用户
 * @param {*} 
 * @return {*}
 * @author: Knight
 */
export function getUser(query?: UserListQuery): Promise<any> {
    return request({
        url: "/api/v1.0/user",
        method: "get",
        params: query
    });
}

export function login(data: User): Promise<any> {
    return request({
        url: "/api/v1.0/user/login",
        method: "post",
        data
    });
}