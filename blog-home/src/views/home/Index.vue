<!--
 * @Description: 首页
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-22 23:40:05
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
import { Options, Vue } from "vue-class-component";
import FunLazy from "funlazy";
import dayjs from "dayjs";
import Observer from "../../components/Observer.vue";
import Search from "../../components/Search.vue";
import Cards from "../../components/Cards.vue";

dayjs.locale("zh-cn");

@Options({
  components: {
    Search,
    Cards,
    Observer,
  },
})
export default class Home extends Vue {
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

  public list = [] as any[];

  created(): void {
    this.list = this.getLiat();
  }

  mounted(): void {
    FunLazy({
      effect: "fadeIn", //图片显示效果，可选值：show, fadeIn
      useErrorImagePlaceholder: true, //当图片加载失败时，使用指定的图片进行占位显示（可使用内置灰色图或自定义图片）
      autoCheckChange: true, //自动检测目标元素内需要进行懒加载操作的元素的变化（例如：动态添加新元素）
      strictLazyMode: false, //严格懒加载模式
    });
  }

  private getLiat(): any[] {
    const _date = `knight · ${dayjs().format("YYYY-MM-DD HH:mm")}`;
    const _list = [] as any[];
    const _num = Math.ceil(Math.random() * 100) || 50;
    for (let i = 0; i < _num; i++) {
      _list.push({
        id: i,
        img: this.imageData[Math.floor(Math.random() * this.imageData.length)],
        title: `Rapidly build modern websites without ever leaving your HTML.${++i}`,
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

  public async intersected(ev: boolean): Promise<void> {
    if (ev) {
      console.log("加载更多数据...");
      setTimeout(() => {
        this.list = this.list.concat(this.getLiat());
      }, 500);
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
