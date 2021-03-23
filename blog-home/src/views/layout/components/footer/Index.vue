<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 22:40:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-23 19:34:16
-->
<template>
  <footer class="footer flex items-center md:flex-row md:justify-around sm:flex-col sm:justify-evenly xs:flex-col xs:justify-evenly">

    <div class="font-extrabold tracking-tight">
      Copyright © 2021 • EAR
    </div>
    <div>
      <a target="_black"
         href="http://www.beian.gov.cn">蜀ICP备2021001885号-1</a>
    </div>

  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  background-color: #f7fbfd;
  width: 100%;
  height: 6rem;
  // margin-bottom: 6rem;
  box-sizing: border-box;
  color: rgb(0 0 0 / 40%);
  font-size: 14px;
  line-height: 1.5;
  z-index: 99;
}
</style>