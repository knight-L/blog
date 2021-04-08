<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 22:42:21
 * @LastEditors: Knight
 * @LastEditTime: 2021-04-08 23:22:46
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

      <transition name="fade">
        <div class="fixed z-100 bottom-16 right-10 bg-white shadow-2xl rounded-full pt-3 pr-3 pb-3 pl-3 cursor-pointer"
             v-show="isTop"
             @click="backtop">
          <svg t="1617083775230"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="2010"
               width="28"
               height="28">
            <path d="M511.057639 1.876555C228.815817 1.876555 0.005898 230.676492 0.005898 512.928296s228.809919 511.071704 511.051741 511.071704c282.251803 0 511.061723-228.819901 511.061723-511.071704-0.009982-282.251803-228.819901-511.051741-511.061723-511.051741z m0.05989 954.098335c-244.680781 0-443.026631-198.345849-443.026631-443.016649 0-244.680781 198.345849-443.016649 443.026631-443.016649 244.6708 0 443.016649 198.335868 443.016649 443.016649S755.788329 955.97489 511.117529 955.97489zM290.941758 598.271611h134.622841v212.110578h149.725114v-212.110578H729.456672L510.199215 328.417047 290.941758 598.271611z m433.214645-362.284868H298.268307v63.902679h425.878114v-63.902679z"
                  p-id="2011"
                  fill="#4ade80"></path>
          </svg>
        </div>
      </transition>
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Hander from "./components/handler/Index.vue";
import ENav from "./components/e-nav/Index.vue";
import Footer from "./components/footer/Index.vue";
import Observer from "../../components/Observer.vue";
import { throttle } from "../../utils/index";

export default defineComponent({
  name: "Layout",
  components: {
    Hander,
    ENav,
    Footer,
    Observer,
  },
  setup() {
    window.addEventListener(
      "scroll",
      throttle(() => {
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        isTop.value = scrollTop >= 500;
      }, 300)
    );

    let navbarSticky = ref(false);
    let isTop = ref(false);

    function intersected(ev: boolean): void {
      navbarSticky.value = !ev;
    }

    function backtop(): void {
      navbarSticky.value = false;
      document.documentElement.scroll({
        top: 0,
        behavior: "smooth",
      });
    }

    return {
      navbarSticky,
      isTop,
      intersected,
      backtop,
    };
  },
});
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>