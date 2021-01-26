<!--
 * @Description: 头部
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 22:40:19
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-26 22:48:16
-->
<template>
  <header class="handler navbar navbar-default light navbar-sticky navbar-sticky--show">
    <!-- handler
    <input class='switch-component'
           type='checkbox'
           v-model="theme"> -->
    <nav>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8"
                   src="../../../../assets/logo.png"
                   alt="Workflow">
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a href="#"
                   class=" text-blue-400 px-3 py-2 rounded-md text-sm font-medium">首页</a>

                <a href="#"
                   class=" hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">精选</a>

                <a href="#"
                   class=" hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">作品</a>

                <a href="#"
                   class="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">资源导航</a>

                <a href="#"
                   class="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">友情链接</a>
              </div>
            </div>
          </div>
          <!-- <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <svg class="h-6 w-6"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     aria-hidden="true">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              <div class="ml-3 relative">
                <div>
                  <button class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          id="user-menu"
                          aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="">
                  </button>
                </div>
                <div v-if="false"
                     class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                     role="menu"
                     aria-orientation="vertical"
                     aria-labelledby="user-menu">
                  <a href="#"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                     role="menuitem">Your Profile</a>

                  <a href="#"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                     role="menuitem">Settings</a>

                  <a href="#"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                     role="menuitem">Sign out</a>
                </div>
              </div>
            </div>
          </div> -->
          <div class="-mr-2 flex md:hidden">

            <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">Open main menu</span>

              <svg class="block h-6 w-6"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   aria-hidden="true">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg class="hidden h-6 w-6"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   aria-hidden="true">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#"
             class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

          <a href="#"
             class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

          <a href="#"
             class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

          <a href="#"
             class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

          <a href="#"
             class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <!-- <img class="h-10 w-10 rounded-full"
                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                   alt=""> -->
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
            <button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: bell -->
              <!-- <svg class="h-6 w-6"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   aria-hidden="true">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg> -->
            </button>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a href="#"
               class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

            <a href="#"
               class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

            <a href="#"
               class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
          </div>
        </div>
      </div>
    </nav>

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
    // window.addEventListener("scroll", this.handleScroll);
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
  // padding-top: 20px;
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
  // padding: 16px 0 0;
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