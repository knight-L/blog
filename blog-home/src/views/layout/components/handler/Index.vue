<!--
 * @Description: 头部
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 22:40:19
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-20 13:10:18
-->
<template>
  <header class="handler navbar navbar-default light navbar-sticky"
          style="visibility: visible;"
          :class="navbarSticky">
    handler
    <input class='switch-component'
           type='checkbox'
           v-model="theme">
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Handler extends Vue {
  private navbarSticky = "navbar-sticky--hide";

  private get theme(): boolean {
    const theme: string = window.localStorage.getItem("theme") || "light";
    window.document.documentElement.setAttribute("data-theme", theme);
    return theme === "dark" ? true : false;
  }
  private set theme(value: boolean) {
    const theme: string = !value ? "light" : "dark";
    window.localStorage.setItem("theme", theme);
    window.document.documentElement.setAttribute("data-theme", theme);
  }

  public mounted(): void {
    window.addEventListener("scroll", this.handleScroll);
  }

  /**
   * @description: 滚动监听函数
   * @param {*}
   * @return {*}
   * @author: Knight
   */
  private handleScroll(): void {
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop; // 滚动条偏移量
    if (scrollTop > 100) {
      this.navbarSticky = "navbar-sticky--show";
    } else {
      this.navbarSticky = "navbar-sticky--hide";
    }
  }

  private timer: number | undefined;
  /**
   * @param func 需要包装的函数
   * @param delay 延迟时间，单位ms
   * @param immediate 是否默认执行一次(第一次不延迟)
   */
  private Throttle(func: any, delay: number, immediate = false) {
    let flag = true;
    return (...args: any) => {
      if (immediate) {
        func.apply(this, args);
        immediate = false;
        return;
      }
      if (!flag) {
        return;
      }
      flag = false;
      this.timer = setTimeout(() => {
        func.apply(this, args);
        flag = true;
      }, delay);
    };
  }

  /**
   * @description: 销毁函数
   * @param {*}
   * @return {*}
   * @author: Knight
   */
  public destroyed(): void {
    clearTimeout(this.timer);
    this.timer = undefined;
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>
<style lang="scss" scoped>
.navbar-default {
  background: linear-gradient(to right, #347eff, #1ea3ff);
  font-family: Inter, "Inter UI", Helvetica, Arial, sans-serif;
  margin-bottom: 20px;
  position: relative;
  padding-top: 20px;
  border-radius: 0;
  margin-bottom: 0;
  min-height: 32px;
  z-index: 999;
  border: 0;
}

.navbar-default.navbar-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
  background: #fff;
  z-index: 999;
  padding: 16px 0 0;
  background: rgba(255, 255, 255, 0.9);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}

.navbar-default.navbar-sticky--hide,
.navbar-default.navbar-sticky--show {
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.navbar-default.navbar-sticky--hide {
  -webkit-animation-duration: 1.1s;
  animation-duration: 1.1s;
  -webkit-animation-name: slideup;
  animation-name: slideup;
}

.navbar-default.navbar-sticky--show {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-name: slidedown;
  animation-name: slidedown;
  -webkit-animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

@keyframes slidedown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideup {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
/* 背景层 */
.switch-component {
  position: relative;
  width: 60px;
  height: 30px;
  background-color: #dadada;
  border-radius: 30px;
  border: none;
  outline: none;
  -webkit-appearance: none;
  transition: all 0.2s ease;
}

/* 按钮 */
.switch-component::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #fff;
  border-radius: 50%;
  transition: all 0.2s ease;
}

/* 选中状态时，背景色切换 */
.switch-component:checked {
  background-color: #86c0fa;
}

/* 选中状态时，按钮的位置移动 */
.switch-component:checked::after {
  left: 50%;
}
</style>