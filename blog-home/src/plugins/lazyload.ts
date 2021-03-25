/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-25 11:42:30
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-25 16:48:28
 */
import "intersection-observer";

export default {
    install: (app: { directive: (arg0: string, arg1: { beforeMount(el: HTMLElement, binding: any): void; }) => void; }) => {
        app.directive('lazyload', {
            beforeMount(el: HTMLElement, binding: { value: any; }) {

                const lazyImageObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
                    entries.forEach((entry: IntersectionObserverEntry) => {
                        // 相交率，默认是相对于浏览器视窗
                        if (entry.intersectionRatio > 0) {
                            const lazyImage = entry.target as HTMLImageElement;
                            lazyImage.src = binding.value;
                            // 当前图片加载完之后需要去掉监听,断开这个intersection observer
                            lazyImageObserver.unobserve(lazyImage);
                            lazyImageObserver.disconnect();
                        }
                    })
                })
                lazyImageObserver.observe(el);
            }
        })
    }
}
