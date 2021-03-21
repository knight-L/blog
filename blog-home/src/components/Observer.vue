<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-15 16:15:18
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-21 13:57:48
-->
<template>
  <div class="observer">
    <!-- 加载中... -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "intersection-observer";

@Options({
  props: {
    options: {
      type: Object,
      default: {},
    },
  },
  emits: ["intersect"],
})
export default class Observer extends Vue {
  private observer!: IntersectionObserver;

  mounted(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      entry && entry.isIntersecting
        ? this.$emit("intersect", true)
        : this.$emit("intersect", false);
    }, this.$options.props.options);

    this.observer.observe(this.$el);
  }

  destroyed(): void {
    this.observer.disconnect();
  }
}
</script>
<style lang="scss" scoped>
</style>