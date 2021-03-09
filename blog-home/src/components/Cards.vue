<!--
 * @Description: 卡片列表
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-25 21:28:15
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-09 11:08:25
-->
<template>
  <div class="grid grid-cols-3 gap-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3">
    <div class="bg-white rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition motion-reduce:transform-none hover:scale-105 duration-500 focus:outline-none"
         v-for="item in list"
         :key="item.id">
      <img class="w-full h-48 rounded-t-lg object-cover"
           :data-funlazy="item.img"
           alt="card-title-img">
      <div class="p-4">
        <!-- <h4 class="font-semibold text-lg">{{item.title}}</h4> -->
        <div class="text-gray-600 text-xs uppercase font-semibold tracking-wide">
          {{item.time}}
        </div>
        <div>
          <span class="text-gray-600 text-sm">{{item.title}}</span>

        </div>
        <div class="mt-1">
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
import FunLazy from "funlazy";

@Options({
  components: {},
})
export default class Card extends Vue {
  private imageData = [
    "http://browser9.qhimg.com/bdm/426_263_0/t0183def7a3a7924215.jpg",
    "http://browser9.qhimg.com/bdm/426_263_0/t0149fb2cfbb567962b.jpg",
    "http://browser9.qhimg.com/bdm/426_263_0/t016f9ec65aabb7aeca.jpg",
    "http://browser9.qhimg.com/bdm/426_263_0/t01376952f5589c328d.jpg",
    "http://browser9.qhimg.com/bdm/853_527_0/t01452e27e87a43d166.jpg",
    "http://browser9.qhimg.com/bdm/426_263_0/t0183def7a3a7924215.jpg",
    "http://browser9.qhimg.com/bdm/853_527_0/t01f520c778bde1acb7.jpg",
    "http://browser9.qhimg.com/bdm/853_527_0/t0139aeec46caeb52a5.jpg",
    "http://browser9.qhimg.com/bdm/853_527_0/t01a12cdf3dcbe3fddc.jpg",
    "http://browser9.qhimg.com/bdm/426_263_0/t01e90f7287eb888682.jpg",
    "http://browser9.qhimg.com/bdm/426_263_0/t017dbe738a0840f999.jpg",
    "http://browser9.qhimg.com/bdm/426_263_0/t01d9e669c8fb501aad.jpg",
    "http://browser9.qhimg.com/bdm/426_263_0/t0124f00e0f24ab1fe3.jpg",
  ];

  private tags = [
    "Vue",
    "Angular",
    "React",
    "CSS",
    "JS",
    "TypeScript",
    "Webpack",
    "VsCode",
    "HTML",
  ];

  private colors = [
    {
      bg: "bg-green-100",
      text: "text-green-500",
    },
    {
      bg: "bg-blue-100",
      text: "text-blue-500",
    },
    {
      bg: "bg-red-100",
      text: "text-red-500",
    },
    {
      bg: "bg-purple-100",
      text: "text-purple-500",
    },
    {
      bg: "bg-violet-100",
      text: "text-violet-500",
    },
    {
      bg: "bg-indigo-100",
      text: "text-indigo-500",
    },
    {
      bg: "bg-emerald-100",
      text: "text-emerald-500",
    },
    {
      bg: "bg-yellow-100",
      text: "text-yellow-500",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-500",
    },
  ];

  private list = [] as any[];

  created(): void {
    this.list = this.getLiat();
  }

  mounted(): void {
    FunLazy({
      effect: "fadeIn",
      useErrorImagePlaceholder: true,
      // strictLazyMode: true,
    });
  }

  private getLiat(): any[] {
    const _date = new Date();
    const _list = [] as any[];
    const _num = Math.ceil(Math.random() * 100) || 50;
    for (let i = 0; i < _num; i++) {
      _list.push({
        id: i,
        img: this.imageData[Math.floor(Math.random() * this.imageData.length)],
        title: `标题-----${++i}`,
        time: _date.toLocaleString(),
        tags: this.randomTags(),
      });
    }
    return _list;
  }

  private randomTags(): any[] {
    const _list = [] as any[];
    for (let i = 0; i < Math.ceil(Math.random() * this.tags.length); i++) {
      _list.push({
        id: i,
        name: this.tags[Math.floor(Math.random() * this.tags.length)],
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
      });
    }
    return _list;
  }
}
</script>
<style lang="scss" scoped>
</style>