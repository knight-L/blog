<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 22:42:21
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-14 18:16:19
-->
<template>
  <div class="h-screen overflow-y-scroll"
       @scroll.passive="onScroll($event)">
    <div class="relative min-h-screen pb-24">

      <Hander v-if="navbarSticky"></Hander>

      <e-nav></e-nav>

      <main>
        <router-view v-slot="{ Component }">
          <transition name="main"
                      mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hander from "./components/handler/Index.vue";
import ENav from "./components/e-nav/Index.vue";
import Footer from "./components/footer/Index.vue";

@Options({
  components: {
    Hander,
    ENav,
    Footer,
  },
})
export default class Layout extends Vue {
  public navbarSticky = false;

  public onScroll(ev: Event): void {
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
.main-enter,
.main-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.main-enter-active,
.main-leave-active {
  transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}
</style>