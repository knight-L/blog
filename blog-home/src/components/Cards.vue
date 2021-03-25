<!--
 * @Description: 卡片列表
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-25 21:28:15
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-25 16:29:05
-->
<template>
  <div class="grid grid-cols-3 gap-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3">
    <div class="bg-white rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition motion-reduce:transform-none hover:scale-105 duration-500 focus:outline-none"
         v-for="item in data"
         :key="item.id">
      <img class="w-full h-48 rounded-t-lg object-cover"
           alt="Card Title Img"
           :src="placeholder"
           v-lazyload="item.img"
           @load="imgLoad"
           @error="imgError">
      <div class="p-4">
        <div class="text-gray-500 text-xs font-semibold tracking-wide leading-7">
          {{item.time}}
        </div>
        <div>
          <p class="text-gray-900 text-sm leading-6 mb-1">{{item.title}}</p>
          <p class="text-gray-500 font-semibold text-sm leading-5">A utility-first CSS framework packed with classes like flex, pt-4, text-center.</p>
        </div>
        <div class="mt-1 mb-1">
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full mr-1 bg-green-100 text-green-500"
                v-for="(tag,index) in item.tags"
                :key="index"
                :class="Colors[tag.color]">
            {{tag.name}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { Card } from "./types";

export default defineComponent({
  name: "Cards",
  props: {
    data: {
      type: [Array] as PropType<Card[]>,
      default: () => [],
    },
  },
  setup() {
    enum Colors {
      green = "bg-green-100 text-green-500",
      blue = "bg-blue-100 text-blue-500",
      red = "bg-red-100 text-red-500",
      purple = "bg-purple-100 text-purple-500",
      violet = "bg-violet-100 text-violet-500",
      indigo = "bg-indigo-100 text-indigo-500",
      emerald = "bg-emerald-100 text-emerald-500",
      yellow = "bg-yellow-100 text-yellow-500",
      orange = "bg-orange-100 text-orange-500",
    }

    const placeholder =
      "data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAA1BMVEXd3d3u346CAAAADUlEQVR42gECAP3/AAAAAgABUyucMAAAAABJRU5ErkJggg==";

    function imgLoad(event: Event) {
      const img = event.target as HTMLImageElement;
      img.classList.add("anim_fade");
      img.onload = null;
    }

    function imgError(event: Event) {
      const img = event.target as HTMLImageElement;
      img.src = placeholder;
      img.onerror = null;
    }

    return { imgLoad, imgError, Colors, placeholder };
  },
});
</script>
<style lang="scss" scoped>
@import "../styles/animation.css";
.anim_fade {
  animation-name: fadeIn;
  animation-duration: 500ms;
}
</style>