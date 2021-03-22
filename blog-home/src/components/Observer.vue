<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-15 16:15:18
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-22 22:58:39
-->
<template>
  <div class="observer text-gray-500 text-sm">
    <Loading v-if="loading">加载中...</Loading>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "intersection-observer";
import Loading from "../components/Loading.vue";

@Options({
  components: {
    Loading,
  },
  props: {
    options: {
      type: Object,
      default: {},
    },
    loading: {
      type: Boolean,
      default: false,
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