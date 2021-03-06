<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-31 18:09:01
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-02 15:19:01
-->
<template>
  <a-layout class="layout">
    <Sider :collapsed="collapsed"></Sider>
    <a-layout>
      <Header :collapsed="collapsed"
              @toggleCollapse="toggleCollapse()"></Header>
      <a-layout-content :style="{ margin: '88px 16px 24px',  minHeight: '280px',}">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Sider from "./Sider.vue";
import Header from "./Header.vue";

@Options({
  components: {
    Sider,
    Header,
  },
})
export default class Layout extends Vue {
  private collapsed = false;

  private toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }
}
</script>
<style scoped lang="less">
.layout {
  height: 100vh;
}
</style>
