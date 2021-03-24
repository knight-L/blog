<!--
 * @Description: 首页
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-24 13:50:30
-->
<template>
  <div class="rounded-t-xl from-purple-50 to-purple-100">

    <div class="flex space-x-4 mt-10 mb-10">

      <div class="flex-none xl:w-72 rounded-md  text-white text-2xl font-extrabold flex items-center justify-center">

      </div>

      <div class="flex-grow rounded-md text-white text-2xl font-extrabold flex items-center justify-center">

        <div class="from-indigo-50 to-indigo-100">

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
import { defineComponent, onMounted, ref } from "vue";
import FunLazy from "funlazy";
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

    onMounted(async () => {
      await getLiat();
      FunLazy({
        effect: "fadeIn", //图片显示效果，可选值：show, fadeIn
        useErrorImagePlaceholder: true, //当图片加载失败时，使用指定的图片进行占位显示（可使用内置灰色图或自定义图片）
        autoCheckChange: true, //自动检测目标元素内需要进行懒加载操作的元素的变化（例如：动态添加新元素）
        strictLazyMode: false, //严格懒加载模式
      });
    });

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
