<!--
 * @Description: 卡片列表
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-25 21:28:15
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-22 23:36:03
-->
<template>
  <div class="grid grid-cols-3 gap-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3">
    <div class="bg-white rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition motion-reduce:transform-none hover:scale-105 duration-500 focus:outline-none"
         v-for="item in data"
         :key="item.id">
      <img class="w-full h-48 rounded-t-lg object-cover"
           alt="card-title-img"
           :data-funlazy="item.img"
           onerror="hideImg2();">
      <div class="p-4">
        <div class="text-gray-500 text-xs font-semibold tracking-wide leading-7">
          {{item.time}}
        </div>
        <div>
          <p class="text-gray-900 text-sm leading-6 mb-1">{{item.title}}</p>
          <p class="text-gray-500 font-semibold text-sm leading-5">A utility-first CSS framework packed with classes like flex, pt-4, text-center.</p>
        </div>
        <div class="mt-1 mb-1">
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full mr-1"
                v-for="tag in item.tags"
                :key="tag.id"
                :class="[tag.color.bg, tag.color.text]">
            {{tag.name}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
})
export default class Card extends Vue {}
</script>
<style lang="scss" scoped>
</style>