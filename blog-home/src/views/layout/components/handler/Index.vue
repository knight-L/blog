<!--
 * @Description: 头部
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 22:40:19
 * @LastEditors: Knight
 * @LastEditTime: 2021-04-08 23:22:32
-->
<template>
  <header class="handler navbar navbar-default navbar-sticky navbar-sticky--show">

    <e-nav></e-nav>

  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ENav from "../e-nav/Index.vue";

export default defineComponent({
  name: "Handler",
  components: {
    ENav,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "../../../../styles/animation.css";

.navbar-default {
  font-family: Inter, "Inter UI", Helvetica, Arial, sans-serif;
  margin-bottom: 20px;
  position: relative;
  border-radius: 0;
  margin-bottom: 0;
  min-height: 32px;
  z-index: 999;
  border: 0;
  &.navbar-sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
    z-index: 999;
    background: rgba(255, 255, 255, 0.9);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
  }
  &.navbar-sticky--show {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-name: slidedown;
    animation-name: slidedown;
    -webkit-animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
}
.navbar-default.navbar-sticky--show {
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
</style>