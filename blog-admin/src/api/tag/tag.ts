/*
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-02-04 22:46:40
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-06 23:17:24
 */
import request from "@/utils/request";
import { Tag, TagListQuery } from "./interface";

/**
 * @description: 
 * @param {*} 
 * @return {*}
 * @author: Knight
 */
export function create(data: Tag): Promise<any> {
    return request({
        url: "/api/v1.0/tag",
        method: "post",
        data: data
    });
}

/**
 * @description: 
 * @param {*} 
 * @return {*}
 * @author: Knight
 */
export function getTag(query?: TagListQuery): Promise<any> {
    return request({
        url: "/api/v1.0/tag",
        method: "get",
        params: query
    });
}
