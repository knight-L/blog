/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-24 14:15:31
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-24 16:06:14
 */
interface Tag {
    color: "green" | "blue" | "red" | "purple" | "violet" | "indigo" | "emerald" | "yellow" | "orange",
    name: string
}

export interface Card {
    id: string;
    img?: string;
    time?: string;
    title?: string;
    tags?: Tag[];
}