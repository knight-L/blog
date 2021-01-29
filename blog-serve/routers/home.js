/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 22:06:06
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-28 22:10:10
 */
const router = require("koa-router")();
const { index } = require("../controllers/home");

router.get("/", index);

module.exports = router;
