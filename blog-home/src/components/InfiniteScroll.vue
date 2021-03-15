<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-15 16:15:06
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-15 16:35:13
-->
<template>
  <div>
    <ul>
      <li class="list-item"
          v-for="item in items"
          :key="item.id">{{item.name}}</li>
    </ul>
    <Observer @intersect="intersected" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Observer from "./Observer.vue";

@Options({
  Observer,
})
export default class InfiniteScroll extends Vue {
  public page = 1;
  public items = [] as any[];

  public async intersected(): Promise<void> {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${this.page}&_limit=50`
    );

    this.page++;
    const items = await res.json();
    this.items = [...this.items, ...items];
  }
}
</script>
<style lang="scss" scoped>
</style>