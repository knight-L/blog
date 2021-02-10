/*
 * @Description:标签相关路由
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-02-05 11:24:36
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-06 23:16:56
 */
const router = require("koa-router")({ prefix: "/api/v1.0/tag" });
const { find, create } = require("../controllers/tag");
const config = require("../config");
const auth = require("koa-jwt")({ secret: config.jwt.secret });

router.get("/", auth, find);

router.post("/", auth, create);

module.exports = router;
