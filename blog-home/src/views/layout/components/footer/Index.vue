<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 22:40:42
 * @LastEditors: Knight
 * @LastEditTime: 2020-12-27 21:02:40
-->
<template>
  <footer class="footer">
    footer
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Footer extends Vue {}
</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  background-color: #f7fbfd;
  width: 100%;
  padding: 40px 150px;
  margin-bottom: -100px;
  box-sizing: border-box;
  color: rgb(0 0 0 / 40%);
  font-size: 14px;
  line-height: 1.5;
  z-index: 9;
}
</style>