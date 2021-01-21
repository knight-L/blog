<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 22:42:21
 * @LastEditors: Knight
 * @LastEditTime: 2020-12-27 21:03:37
-->
<template>
  <div class="layout">
    <Hander></Hander>
    <main>
      <router-view />
    </main>
    <Footer></Footer>
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
export default class Layout extends Vue {}
</script>
<style lang="scss" scoped>
.layout {
  position: relative;
}
</style>