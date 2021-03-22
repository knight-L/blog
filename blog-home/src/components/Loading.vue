<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-21 13:53:47
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-22 23:01:49
-->
<template>
  <div class="loading">
    <div class="loader"></div>
    <slot></slot>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  //   props: {},
  //   emits: [],
})
export default class Loading extends Vue {}
</script>
<style lang="scss" scoped>
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
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>