<!--
 * @Description: 工作台
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-31 18:35:13
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-31 18:47:53
-->
<template>
  <div>
    <h1 class="title">Hi！{{timeFix}}，欢迎登录EAR ADMIN</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Dashboard extends Vue {
  private timeFix = (() => {
    const time = new Date();
    const hour = time.getHours();
    return hour < 9
      ? "早上好"
      : hour <= 11
      ? "上午好"
      : hour <= 13
      ? "中午好"
      : hour < 18
      ? "下午好"
      : "晚上好";
  })();
}
</script>
<style scoped lang="less">
.title {
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
}
</style>
