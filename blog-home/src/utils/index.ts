/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-30 13:58:51
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-30 16:12:25
 */

/**
 * @param func 需要包装的函数
 * @param delay 延迟时间，单位ms
 */
const throttle = (func: any, delay: number): any => {
    let pre = Date.now();
    return (...args: any) => {
        const now = Date.now();
        if (now - pre >= delay) {
            func.apply(this, args);
            pre = Date.now();
        }
    }
}

export { throttle }


