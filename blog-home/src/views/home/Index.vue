<!--
 * @Description: 首页
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-27 00:33:04
-->
<template>
  <div class="rounded-t-xl from-purple-50 to-purple-100">

    <nav>
      <div class="max-w-7xl mx-auto px-4 xs:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8"
                   src="../../assets/logo.png"
                   alt="logo">
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

      <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
      <div class="hidden lg:hidden">
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

            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
            <button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: bell -->
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
        </div>
      </div>
    </nav>

    <div class="flex space-x-4 mt-10 mb-10">
      <div class="flex-none xl:w-72 rounded-md  text-white text-2xl font-extrabold flex items-center justify-center">

      </div>
      <div class="flex-grow rounded-md text-white text-2xl font-extrabold flex items-center justify-center">

        <div class="from-indigo-50 to-indigo-100">

          <Card></Card>

        </div>

      </div>
      <div class="flex-none xl:w-72 rounded-md text-white text-2xl font-extrabold flex items-center justify-center">

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "../../components/Card.vue";

@Options({
  components: {
    Card,
  },
})
export default class Home extends Vue {
  //   public created(): void {
  //   }
  //   mounted(): void {
  //   }
}
</script>
<style lang="scss" scoped>
</style>
