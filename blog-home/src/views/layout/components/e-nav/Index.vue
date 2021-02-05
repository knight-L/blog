<!--
 * @Description: nav
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-27 15:25:13
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-03 11:22:09
-->
<template>
  <nav>
    <div class="max-w-7xl mx-auto px-4 xs:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8 rounded-full shadow"
                 src="@/assets/logo.png"
                 alt="logo">
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link class="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                           to="/"
                           :class="{'text-blue-400':activeNav === '/'}">首页</router-link>

              <router-link class="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                           to="/featured"
                           :class="{'text-blue-400':activeNav === '/featured'}">精选</router-link>

              <router-link class="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                           to="/works"
                           :class="{'text-blue-400':activeNav === '/works'}">作品</router-link>

              <router-link class="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                           to="/resources"
                           :class="{'text-blue-400':activeNav === '/resources'}">资源导航</router-link>

              <router-link class="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                           to="/friendship"
                           :class="{'text-blue-400':activeNav === '/friendship'}">友情链接</router-link>

            </div>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">

          <button @click="mobileMenu = !mobileMenu"
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  id="main-menu"
                  aria-haspopup="true"
                  x-bind:aria-expanded="open">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6"
                 x-description="Heroicon name: menu"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 aria-hidden="true">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

        </div>

        <transition enter-active-class="duration-150 ease-out"
                    enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95">
          <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
               v-show="mobileMenu">
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-8 rounded-full shadow"
                       src="@/assets/logo.png"
                       alt="logo">
                </div>
                <div class="-mr-2">
                  <button type="button"
                          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          @click="mobileMenu = !mobileMenu">
                    <span class="sr-only">Close main menu</span>
                    <!-- Heroicon name: x -->
                    <svg class="h-6 w-6"
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
              <div role="menu"
                   aria-orientation="vertical"
                   aria-labelledby="main-menu">
                <div class="px-2 pt-2 pb-3 space-y-1"
                     role="none"
                     @click="mobileMenu = !mobileMenu">

                  <router-link class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                               to="/"
                               :class="{'bg-gray-50':activeNav === '/'}">首页</router-link>

                  <router-link class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                               to="/featured"
                               :class="{'bg-gray-50':activeNav === '/featured'}">精选</router-link>

                  <router-link class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                               to="/works"
                               :class="{'bg-gray-50':activeNav === '/works'}">作品</router-link>

                  <router-link class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                               to="/resources"
                               :class="{'bg-gray-50':activeNav === '/resources'}">资源导航</router-link>

                  <router-link class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                               to="/friendship"
                               :class="{'bg-gray-50':activeNav === '/friendship'}">友情链接</router-link>

                </div>
                <!-- <div role="none">
                  <a href="#"
                     class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                     role="menuitem">
                    登录
                  </a>
                </div> -->
              </div>
            </div>
          </div>

        </transition>

      </div>
    </div>

  </nav>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import router from "../../../../router/index";

@Options({
  props: {},
  watch: {
    "$route.path": {
      //这里可以加你监听到路由改变时要触发的方法
      handler(newVal) {
        this.activeNav = newVal;
      },
      immediate: true,
    },
  },
  components: {},
})
export default class ENav extends Vue {
  private activeNav = "";
  private mobileMenu = false;
  private routes = router.options.routes;

  created(): void {
    console.log(this.routes);
    // const { path } = useRoute();
    // this.activeNav = path;
  }
}
</script>
<style lang="scss" scoped>
</style>