<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-31 18:35:43
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-16 20:18:10
-->
<template>
  <div>
    <a-button type="primary"
              style="margin-bottom: 16px;margin-right: 16px;"
              @click="createUser()">
      创建用户
    </a-button>
    <a-button type="primary"
              style="margin-bottom: 16px;margin-right: 16px;"
              @click="getUsers()">
      获取用户
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
import { create, getUser } from "../../api/user/user";

@Options({
  components: {},
})
export default class Users extends Vue {
  public loading = false;
  public listData = [];
  public pagination = {};
  public listQuery = {
    page: 1,
    pageSize: 10,
  };

  public columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      width: 150,
    },
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
      width: 150,
    },
    {
      title: "头像",
      dataIndex: "avatar",
      key: "avatar",
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
    {
      title: "角色",
      dataIndex: "roles",
      key: "roles",
      width: 150,
    },
    {
      title: "简介",
      dataIndex: "introduction",
      key: "introduction",
      width: 150,
    },
  ];

  public mounted(): void {
    this.getUsers();
  }

  public async createUser(): Promise<void> {
    for (let i = 1; i <= new Array(50).length; i++) {
      try {
        const data = await create({ username: `user-${i}`, password: "admin" });
        console.log(data);
      } catch (err) {}
    }
  }

  public async getUsers(): Promise<void> {
    try {
      this.loading = true;
      const { data, pageSize, total, page } = await getUser(this.listQuery);
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
    this.getUsers();
  }
}
</script>
<style scoped lang="less">
</style>
