<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-31 18:08:21
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-16 20:39:45
-->
<template>
  <a-layout-header style="background: #fff; padding: 0;position:fixed;zIndex: 1;width:100%;">
    <menu-unfold-outlined v-if="$options.props.collapsed"
                          class="trigger"
                          @click="$emit('toggleCollapse')" />
    <menu-fold-outlined v-else
                        class="trigger"
                        @click="$emit('toggleCollapse')" />
  </a-layout-header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";

@Options({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  props: {
    collapsed: Boolean,
  },
  emits: ["toggleCollapse"],
})
export default class Header extends Vue {}
</script>
<style scoped lang="less">
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #1890ff;
    background-color: #f0f0f0;
  }
}
</style>
