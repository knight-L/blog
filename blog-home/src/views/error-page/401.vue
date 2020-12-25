<!--
 * @Description: 403错误页
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-11-13 10:57:30
 * @LastEditors: Knight
 * @LastEditTime: 2020-11-20 11:03:37
-->
<template>
  <div class="site-wrapper site-page--not-found">
    <div class="site-content__wrapper">
      <div class="site-content">
        <h2 class="not-found-title">401</h2>
        <p class="not-found-desc">抱歉！您没有该页面访问<em>权限</em>或登录已<em>过期</em> ...</p>
        <el-button type="primary"
                   class="not-found-btn-gohome"
                   @click="againLogin()">重新登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * @description: 重新登录
     * @param {*}
     * @return {*}
     * @author: Knight
     */
    againLogin () {
      this.$store.commit("SET_USER_INFO", {});
      this.$store.commit("SET_IS_MENU", false);
      localStorage.removeItem("userInfo");
      this.$router.replace("/login");
    }
  }
}
</script>

<style lang="scss" scoped>
.site-wrapper.site-page--not-found {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  .site-content__wrapper {
    padding: 0;
    margin: 0;
    background-color: #fff;
  }
  .site-content {
    position: fixed;
    top: 15%;
    left: 50%;
    z-index: 2;
    padding: 30px;
    text-align: center;
    transform: translate(-50%, 0);
  }
  .not-found-title {
    margin: 20px 0 15px;
    font-size: 10em;
    font-weight: 400;
    color: rgb(55, 71, 79);
  }
  .not-found-desc {
    margin: 0 0 30px;
    font-size: 26px;
    text-transform: uppercase;
    color: rgb(118, 131, 143);
    > em {
      font-style: normal;
      color: #ee8145;
    }
  }
  .not-found-btn-gohome {
    margin-left: 30px;
  }
}
</style>
