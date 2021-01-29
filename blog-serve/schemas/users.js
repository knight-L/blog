/*
 * @Description:用户
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 23:25:06
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-29 00:13:57
 */
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String },
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar_url: { type: String, required: false },
  createTime: { type: Date, required: true, default: Date.now },
});

module.exports = model("user", userSchema);
