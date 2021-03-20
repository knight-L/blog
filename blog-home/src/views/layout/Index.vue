<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 22:42:21
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-20 20:09:44
-->
<template>
  <div>
    <div class="relative min-h-screen pb-24">
      <Observer @intersect="intersected"></Observer>
      <Hander v-show="navbarSticky"></Hander>

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
import Observer from "../../components/Observer.vue";

@Options({
  components: {
    Hander,
    ENav,
    Footer,
    Observer,
  },
})
export default class Layout extends Vue {
  public navbarSticky = false;

  public intersected(ev: boolean): void {
    this.navbarSticky = !ev;
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