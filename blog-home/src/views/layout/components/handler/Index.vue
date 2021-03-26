<!--
 * @Description: 头部
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 22:40:19
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-26 10:47:48
-->
<template>
  <header class="handler navbar navbar-default light navbar-sticky navbar-sticky--show">

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
// .navbar-default {
//   background: linear-gradient(to right, #347eff, #1ea3ff);
//   font-family: Inter, "Inter UI", Helvetica, Arial, sans-serif;
//   margin-bottom: 20px;
//   position: relative;
//   // padding-top: 20px;
//   border-radius: 0;
//   margin-bottom: 0;
//   min-height: 32px;
//   z-index: 999;
//   border: 0;
// }

// .navbar-default.navbar-sticky {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   opacity: 0;
//   -webkit-transform: translate3d(0, -100%, 0);
//   transform: translate3d(0, -100%, 0);
//   box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
//   background: #fff;
//   z-index: 999;
//   // padding: 16px 0 0;
//   background: rgba(255, 255, 255, 0.9);
//   -webkit-backdrop-filter: saturate(180%) blur(20px);
//   backdrop-filter: saturate(180%) blur(20px);
// }

// .navbar-default.navbar-sticky--hide,
// .navbar-default.navbar-sticky--show {
//   -webkit-animation-fill-mode: forwards;
//   animation-fill-mode: forwards;
// }

// .navbar-default.navbar-sticky--hide {
//   -webkit-animation-duration: 1.1s;
//   animation-duration: 1.1s;
//   -webkit-animation-name: slideup;
//   animation-name: slideup;
// }

// .navbar-default.navbar-sticky--show {
//   -webkit-animation-duration: 0.5s;
//   animation-duration: 0.5s;
//   -webkit-animation-name: slidedown;
//   animation-name: slidedown;
//   -webkit-animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
//   animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
// }

// /* 背景层 */
// .switch-component {
//   position: relative;
//   width: 60px;
//   height: 30px;
//   background-color: #dadada;
//   border-radius: 30px;
//   border: none;
//   outline: none;
//   -webkit-appearance: none;
//   transition: all 0.2s ease;
// }

// /* 按钮 */
// .switch-component::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 50%;
//   height: 100%;
//   background-color: #fff;
//   border-radius: 50%;
//   transition: all 0.2s ease;
// }

// /* 选中状态时，背景色切换 */
// .switch-component:checked {
//   background-color: #86c0fa;
// }

// /* 选中状态时，按钮的位置移动 */
// .switch-component:checked::after {
//   left: 50%;
// }
.navbar-default {
  background: linear-gradient(to right, #347eff, #1ea3ff);
  font-family: Inter, "Inter UI", Helvetica, Arial, sans-serif;
  margin-bottom: 20px;
  position: relative;
  // padding-top: 20px;
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
    background: #fff;
    z-index: 999;
    // padding: 16px 0 0;
    background: rgba(255, 255, 255, 0.9);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
  }
  &.navbar-sticky--hide {
    -webkit-animation-duration: 1.1s;
    animation-duration: 1.1s;
    -webkit-animation-name: slideup;
    animation-name: slideup;
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
.navbar-default.navbar-sticky--hide,
.navbar-default.navbar-sticky--show {
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
/* 背景层 */
.switch-component {
  position: relative;
  width: 60px;
  height: 30px;
  background-color: #dadada;
  border-radius: 30px;
  border: none;
  outline: none;
  -webkit-appearance: none;
  transition: all 0.2s ease;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #fff;
    border-radius: 50%;
    transition: all 0.2s ease;
  }
  &:checked {
    background-color: #86c0fa;
    &::after {
      left: 50%;
    }
  }
}
</style>