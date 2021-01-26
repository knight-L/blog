<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 22:42:21
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-26 22:17:02
-->
<template>
  <div class="h-screen overflow-y-scroll"
       @scroll.passive="onScroll($event)">
    <div class="relative min-h-screen pb-24">
      <Hander v-if="navbarSticky"></Hander>
      <main>
        <router-view />
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hander from "./components/handler/Index.vue";
import Footer from "./components/footer/Index.vue";

@Options({
  components: {
    Hander,
    Footer,
  },
})
export default class Layout extends Vue {
  private navbarSticky = false;

  private onScroll(ev: Event): void {
    const scrollTop = (ev.target as HTMLElement).scrollTop; // 滚动条偏移量
    // console.log("滚动条偏移量", scrollTop);
    if (scrollTop > 100) {
      this.navbarSticky = true;
    } else {
      this.navbarSticky = false;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>