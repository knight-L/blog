<!--
 * @Description: 首页
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-27 21:43:17
-->
<template>
  <div class="rounded-t-xl from-purple-50 to-purple-100">

    <div class="flex space-x-4 mt-10 mb-10">
      <div class="flex-none xl:w-72 rounded-md  text-white text-2xl font-extrabold flex items-center justify-center">

      </div>
      <div class="flex-grow rounded-md text-white text-2xl font-extrabold flex items-center justify-center">

        <div class="from-indigo-50 to-indigo-100">

          <Cards></Cards>

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

@Options({
  components: {
    Cards,
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
