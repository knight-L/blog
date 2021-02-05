/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-02-04 22:46:55
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-04 22:49:46
 */
export interface TagListQuery {
    page?: number;
    pageSize?: number;
}

export interface Tag {
    name: string;
}