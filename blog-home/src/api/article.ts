/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-23 22:32:24
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-23 22:37:19
 */
import request from "@/utils/request";
import { ArticleListQuery } from "./interface";

/**
 * @description: 获取文章
 * @param {*} 
 * @return {*}
 * @author: Knight
 */
export function getArticle(query?: ArticleListQuery): Promise<any> {
    return request({
        url: "/api/v1.0/article",
        method: "get",
        params: query
    });
}