/*
 * @Description:用户相关路由
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-29 13:57:31
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-23 23:01:39
 */
const router = require("koa-router")({ prefix: "/api/v1.0/article" });
const { find } = require("../controllers/article");

router.get("/", find);

module.exports = router;
