<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-22 23:25:09
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-22 23:26:23
-->
<template>
  <div>
    <form class="relative mb-10 xs:px-6">
      <svg width="40"
           height="20"
           fill="currentColor"
           class="absolute top-1/2 transform -translate-y-1/2 text-gray-400 border-r">
        <path fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input class="focus:outline-none w-full text-sm text-black placeholder-gray-500 rounded-md py-2 pl-16 transition duration-300"
             type="text"
             aria-label="Filter projects"
             placeholder="请输入您想搜索的内容" />
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Search extends Vue {}
</script>
<style lang="scss" scoped>
</style>