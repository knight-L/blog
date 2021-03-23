<!--
 * @Description: 加载动画
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-21 13:53:47
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-23 22:08:49
-->
<template>
  <div class="loading">
    <div class="loader"></div>
    <slot></slot>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
});
</script>
<style lang="scss" scoped>
@import "../styles/animation.css";
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}

.loader {
  margin-right: 1em;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.4em solid rgba(59, 130, 246, 0.2);
  border-right: 0.4em solid rgba(59, 130, 246, 0.2);
  border-bottom: 0.4em solid rgba(59, 130, 246, 0.2);
  border-left: 0.4em solid rgba(59, 130, 246, 0.5);
  -webkit-animation: spin 1.1s infinite linear;
  animation: spin 1.1s infinite linear;
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
}
</style>