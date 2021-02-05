/*
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-02-04 22:46:40
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-05 09:48:18
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
        url: "/tag",
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
        url: "/tag",
        method: "get",
        params: query
    });
}
