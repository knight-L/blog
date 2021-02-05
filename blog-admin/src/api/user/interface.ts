/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-02-03 21:32:22
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-03 21:50:35
 */
export interface UserListQuery {
    page?: number;
    pageSize?: number;
}

export interface User {
    username: string;
    password: string;
    avatar?: string;
}