<!--
 * @Description: 根组件
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2020-12-27 18:35:10
-->
<template>
  <router-view />
</template>

<style lang="scss">
@import "@/styles/handle.scss";
body {
  margin: 0;
  padding: 0;
  @include font_color("font_color1");
  @include background_color("background_color1");
  @include border_color("border_color1");
  transition: background-color 0.5s ease;
}
</style>
