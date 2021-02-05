<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-31 18:49:27
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-05 20:20:54
-->
<template>
  <div>
    <a-button type="primary"
              style="margin-bottom: 16px;margin-right: 16px;"
              @click="createTag()">
      创建标签
    </a-button>

    <a-table rowKey='_id'
             size="middle"
             :columns="columns"
             :data-source="listData"
             :pagination="pagination"
             :loading="loading"
             :scroll="{ x: 1500 }"
             @change="handleTableChange">
    </a-table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { create, getTag } from "../../api/tag/tag";

@Options({
  components: {},
})
export default class Tags extends Vue {
  private loading = false;
  private listData = [];
  private pagination = {};
  private listQuery = {
    page: 1,
    pageSize: 10,
  };

  private columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      width: 150,
    },
    {
      title: "标签名",
      dataIndex: "name",
      key: "username",
      width: 150,
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      sorter: true,
    },
    {
      title: "更新时间",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: 150,
    },
  ];

  public mounted(): void {
    this.getTags();
  }

  private async createTag(): Promise<void> {
    for (let i = 1; i <= new Array(50).length; i++) {
      try {
        const data = await create({ name: `tag-${i}` });
        console.log(data);
      } catch (err) {
        // console.log(err);
      }
    }
  }

  private async getTags(): Promise<void> {
    try {
      this.loading = true;
      const { data, pageSize, total, page } = await getTag(this.listQuery);
      this.listData = data;
      this.pagination = {
        current: page,
        pageSize,
        total,
      };
    } catch (err) {
    } finally {
      this.loading = false;
    }
  }

  public handleTableChange(pagination: {
    current: number;
    pageSize: number;
    total: number;
  }): void {
    this.listQuery.page = pagination.current;
    this.getTags();
  }
}
</script>
<style scoped lang="less">
</style>