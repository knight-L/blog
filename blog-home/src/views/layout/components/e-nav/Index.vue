<!--
 * @Description: nav
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-27 15:25:13
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-27 23:56:51
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

          <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  @click="mobileMenu = !mobileMenu">
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

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <div class="w-full bg-gray-800 absolute z-10 shadow-xl md:hidden"
         :class="{'hidden': !mobileMenu}">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">

        <router-link class=" text-white block px-3 py-2 rounded-md text-base font-medium"
                     to="/"
                     :class="{'bg-gray-900':activeNav === '/'}">首页</router-link>

        <router-link class=" text-white block px-3 py-2 rounded-md text-base font-medium"
                     to="/featured"
                     :class="{'bg-gray-900':activeNav === '/featured'}">精选</router-link>

        <router-link class=" text-white block px-3 py-2 rounded-md text-base font-medium"
                     to="/works"
                     :class="{'bg-gray-900':activeNav === '/works'}">作品</router-link>

        <router-link class=" text-white block px-3 py-2 rounded-md text-base font-medium"
                     to="/resources"
                     :class="{'bg-gray-900':activeNav === '/resources'}">资源导航</router-link>

        <router-link class=" text-white block px-3 py-2 rounded-md text-base font-medium"
                     to="/friendship"
                     :class="{'bg-gray-900':activeNav === '/friendship'}">友情链接</router-link>
      </div>
      <!-- <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">

          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">Tom Cook</div>
            <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
          <button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
        </div>
        <div class="mt-3 px-2 space-y-1">
          <a href="#"
             class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

          <a href="#"
             class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

          <a href="#"
             class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
        </div>
      </div> -->
    </div>
  </nav>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//import { useRoute } from "vue-router";

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

  created(): void {
    // const { path } = useRoute();
    // this.activeNav = path;
  }
}
</script>
<style lang="scss" scoped>
</style>