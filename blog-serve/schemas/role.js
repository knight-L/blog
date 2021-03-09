/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 23:30:02
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-28 23:30:03
 */
const { Schema, model } = require("mongoose");

const roleSchema = new Schema(
  {
    __v: {
      type: Number,
      select: false,
    },
    name: {
      type: String,
      select: false,
    }, // 角色名
    note: {
      type: String,
      select: false,
    }, // 角色的备注
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updateAt",
    },
  }
); //如果设置了 timestamps 选项, mongoose 会在你的 schema 自动添加 createdAt 和 updatedAt 字段， 其类型为 Date。

module.exports = model("role", roleSchema);
