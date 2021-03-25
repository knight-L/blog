<!--
 * @Description: 首页
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-25 13:52:20
-->
<template>
  <div class="rounded-t-xl from-purple-50 to-purple-100">

    <div class="flex space-x-4 mt-10 mb-10">

      <div class="flex-none xl:w-72 rounded-md  text-white text-2xl font-extrabold flex items-center justify-center">

      </div>

      <div class="flex-grow rounded-md text-white text-2xl font-extrabold flex items-center justify-center">

        <div class="from-indigo-50 to-indigo-100 w-full">

          <Search></Search>

          <Cards :data="list"></Cards>

          <Observer :loading="true"
                    @intersect="intersected"></Observer>

        </div>

      </div>
      <div class="flex-none xl:w-72 rounded-md text-white text-2xl font-extrabold flex items-center justify-center">

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import dayjs from "dayjs";
import Observer from "../../components/Observer.vue";
import Search from "../../components/Search.vue";
import Cards from "../../components/Cards.vue";
import { getArticle } from "../../api/article";

dayjs.locale("zh-cn");

export default defineComponent({
  name: "Home",
  components: {
    Search,
    Cards,
    Observer,
  },
  setup() {
    let list = ref([] as any[]);

    async function getLiat(): Promise<void> {
      try {
        const { data } = await getArticle();
        list.value = list.value.concat(data);
      } catch (err) {
        console.error(err);
      }
    }

    function intersected(ev: boolean): void {
      if (ev) {
        getLiat();
      }
    }

    return {
      list,
      intersected,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
