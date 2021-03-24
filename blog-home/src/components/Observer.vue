<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-15 16:15:18
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-24 13:47:38
-->
<template>
  <div class="observer text-gray-500 text-sm"
       ref="el">
    <Loading v-if="loading">加载中...</Loading>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import "intersection-observer";
import Loading from "../components/Loading.vue";

export default defineComponent({
  name: "Observer",
  components: {
    Loading,
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["intersect"],
  setup(props, { emit }) {
    const el = ref();
    let observer!: IntersectionObserver;

    onMounted(() => {
      observer = new IntersectionObserver(([entry]) => {
        entry && entry.isIntersecting
          ? emit("intersect", true)
          : emit("intersect", false);
      }, props.options);

      observer.observe(el.value);
    });

    onUnmounted(() => {
      observer.disconnect();
    });

    return {
      el,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>