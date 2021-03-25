/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-25 11:42:30
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-25 17:22:38
 */
import { App } from 'vue'
import "intersection-observer";

export default {
    install: (app: App): void => {
        app.directive('lazyload', {
            beforeMount(el: HTMLElement, binding: { value: any; }) {

                const lazyImageObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
                    entries.forEach((entry: IntersectionObserverEntry) => {
                        // 相交率，默认是相对于浏览器视窗
                        if (entry.intersectionRatio > 0) {
                            const lazyImage = entry.target as HTMLImageElement;
                            lazyImage.src = binding.value;
                            /// 停止观察
                            lazyImageObserver.unobserve(lazyImage);
                            // 关闭观察器，observer 所有的观察都会停止
                            lazyImageObserver.disconnect();
                        }
                    })
                })
                // 开始观察
                lazyImageObserver.observe(el);
            }
        })
    }
}
