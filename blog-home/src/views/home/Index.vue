<!--
 * @Description: 首页
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-15 16:55:24
-->
<template>
  <div class="rounded-t-xl from-purple-50 to-purple-100">

    <div class="flex space-x-4 mt-10 mb-10">

      <div class="flex-none xl:w-72 rounded-md  text-white text-2xl font-extrabold flex items-center justify-center">

      </div>

      <div class="flex-grow rounded-md text-white text-2xl font-extrabold flex items-center justify-center">

        <div class="from-indigo-50 to-indigo-100">

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

          <Cards></Cards>

          <!-- <Pagination class="mt-10 text-center"></Pagination> -->

        </div>

      </div>
      <div class="flex-none xl:w-72 rounded-md text-white text-2xl font-extrabold flex items-center justify-center">

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Cards from "../../components/Cards.vue";
import Pagination from "../../components/Pagination.vue";

@Options({
  components: {
    Cards,
    Pagination,
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
