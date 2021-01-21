<!--
 * @Description: 首页
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-20 23:21:55
-->
<template>
  <div>
    <div class="flex justify-evenly flex-wrap">
      <div v-for="item in 10"
           :key="item"
           class="bg-red-100 text-white rounded-lg text-center h-28 w-28 leading-28 transform hover:scale-110 motion-reduce:transform-none hover:bg-red-700 hover:shadow-lg">{{item}}</div>
    </div>

    <ul class="space-y-2">
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-red-50"></li>
          <li class="bg-red-100"></li>
          <li class="bg-red-200"></li>
          <li class="bg-red-300"></li>
          <li class="bg-red-400"></li>
          <li class="bg-red-500"></li>
          <li class="bg-red-600"></li>
          <li class="bg-red-700"></li>
          <li class="bg-red-800"></li>
          <li class="bg-red-900"></li>
        </ul>
      </li>
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-yellow-50"></li>
          <li class="bg-yellow-100"></li>
          <li class="bg-yellow-200"></li>
          <li class="bg-yellow-300"></li>
          <li class="bg-yellow-400"></li>
          <li class="bg-yellow-500"></li>
          <li class="bg-yellow-600"></li>
          <li class="bg-yellow-700"></li>
          <li class="bg-yellow-800"></li>
          <li class="bg-yellow-900"></li>
        </ul>
      </li>
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-green-50"></li>
          <li class="bg-green-100"></li>
          <li class="bg-green-200"></li>
          <li class="bg-green-300"></li>
          <li class="bg-green-400"></li>
          <li class="bg-green-500"></li>
          <li class="bg-green-600"></li>
          <li class="bg-green-700"></li>
          <li class="bg-green-800"></li>
          <li class="bg-green-900"></li>
        </ul>
      </li>
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-blue-50"></li>
          <li class="bg-blue-100"></li>
          <li class="bg-blue-200"></li>
          <li class="bg-blue-300"></li>
          <li class="bg-blue-400"></li>
          <li class="bg-blue-500"></li>
          <li class="bg-blue-600"></li>
          <li class="bg-blue-700"></li>
          <li class="bg-blue-800"></li>
          <li class="bg-blue-900"></li>
        </ul>
      </li>
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-purple-50"></li>
          <li class="bg-purple-100"></li>
          <li class="bg-purple-200"></li>
          <li class="bg-purple-300"></li>
          <li class="bg-purple-400"></li>
          <li class="bg-purple-500"></li>
          <li class="bg-purple-600"></li>
          <li class="bg-purple-700"></li>
          <li class="bg-purple-800"></li>
          <li class="bg-purple-900"></li>
        </ul>
      </li>
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-pink-50"></li>
          <li class="bg-pink-100"></li>
          <li class="bg-pink-200"></li>
          <li class="bg-pink-300"></li>
          <li class="bg-pink-400"></li>
          <li class="bg-pink-500"></li>
          <li class="bg-pink-600"></li>
          <li class="bg-pink-700"></li>
          <li class="bg-pink-800"></li>
          <li class="bg-pink-900"></li>
        </ul>
      </li>
    </ul>

    <ul class="space-y-4">
      <li>
        <div class="w-64 h-3 bg-gradient-to-br from-gray-500 to-purple-600"></div>
      </li>
      <li>
        <div class="w-56 h-3 bg-gradient-to-br from-gray-500 to-purple-600"></div>
      </li>
      <li>
        <div class="w-48 h-3 bg-gradient-to-br from-gray-500 to-purple-600"></div>
      </li>
      <li>
        <div class="w-40 h-3 bg-gradient-to-br from-gray-500 to-purple-600"></div>
      </li>
      <li>
        <div class="w-32 h-3 bg-gradient-to-br from-gray-500 to-purple-600"></div>
      </li>
      <li>
        <div class="w-24 h-3 bg-gradient-to-br from-gray-500 to-purple-600"></div>
      </li>
      <li>
        <div class="w-20 h-3 bg-gradient-to-br from-gray-500 to-purple-600"></div>
      </li>
      <li>
        <div class="w-16 h-3 bg-gradient-to-br from-gray-500 to-purple-600"></div>
      </li>
      <li>
        <div class="w-12 h-3 bg-gradient-to-br from-gray-500 to-purple-600"></div>
      </li>
      <li>
        <div class="w-10 h-3 bg-gradient-to-br from-gray-500 to-purple-600"></div>
      </li>
    </ul>

    <ul class="space-y-6">
      <li>
        <p class="font-sans">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          abcdefghijklmnopqrstuvwxyz
          1234567890
        </p>
      </li>
      <li>
        <p class="font-serif">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          abcdefghijklmnopqrstuvwxyz
          1234567890
        </p>
      </li>
      <li>
        <p class="font-mono">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          abcdefghijklmnopqrstuvwxyz
          1234567890
        </p>
      </li>
    </ul>

    <ul class="grid grid-cols-2 gap-4">
      <li>
        <div class="shadow-sm bg-white rounded-lg h-16"></div>
      </li>
      <li>
        <div class="shadow bg-white rounded-lg h-16"></div>
      </li>
      <li>
        <div class="shadow-md bg-white rounded-lg h-16"></div>
      </li>
      <li>
        <div class="shadow-lg bg-white rounded-lg h-16"></div>
      </li>
      <li>
        <div class="shadow-xl bg-white rounded-lg h-16"></div>
      </li>
      <li>
        <div class="shadow-2xl bg-white rounded-lg h-16"></div>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
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
