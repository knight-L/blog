/*
 * @Description:标签相关路由
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-02-05 11:24:36
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-05 11:25:24
 */
const router = require("koa-router")({ prefix: "/tag" });
const { find, create } = require("../controllers/tag");

router.get("/", find);

router.post("/", create);

module.exports = router;
