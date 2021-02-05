<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-31 18:08:45
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-05 11:01:35
-->
<template>
  <a-layout-sider :collapsed="collapsed"
                  :trigger="null"
                  collapsible
                  style="background: #fff">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png">
        <h1>EAR-ADMIN</h1>
      </router-link>
    </div>
    <a-menu theme="light"
            mode="inline"
            :selectedKeys="selectedKeys"
            @select="menuSelect($event.selectedKeys)">
      <a-menu-item key="1">
        <DashboardOutlined />
        <span>Dashboard</span>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/articles">
          <FileTextOutlined />
          <span>文章管理</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/tags">
          <TagOutlined />
          <span>标签管理</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/users">
          <UserOutlined />
          <span>用户管理</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  DashboardOutlined,
  FileTextOutlined,
  TagOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

@Options({
  components: {
    DashboardOutlined,
    FileTextOutlined,
    TagOutlined,
    UserOutlined,
  },
  props: ["collapsed"],
})
export default class Sider extends Vue {
  public selectedKeys = ["1"];

  public menuSelect(selectedKeys: string[]): void {
    this.selectedKeys = selectedKeys;
  }
}
</script>
<style scoped lang="less">
.logo {
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: 24px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  overflow: hidden;
  background-color: #fff;
  &.light {
    background-color: #fff;
    h1 {
      color: #000;
    }
  }
  h1 {
    color: rgba(0, 0, 0, 0.85);
    font-size: 20px;
    margin: 0 0 0 12px;
    display: inline-block;
    vertical-align: middle;
  }
  img {
    width: 32px;
    vertical-align: middle;
  }
}
</style>
