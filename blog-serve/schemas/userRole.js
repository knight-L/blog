/*
 * @Description:用户角色关系表
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-30 20:43:47
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-30 20:49:25
 */
// 加载数据库模块
const { Schema, model } = require("mongoose");

// 定义用户角色关系表结构
const userRoleSchema = new Schema(
  {
    __v: {
      type: Number,
      select: false,
    },
    userId: {
      // 用户的id
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    roleId: {
      // 角色的id
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updateAt",
    },
  }
);

// 编译生成UserRole模型，并将模型构造函数导出
module.exports = model("userRole", userRoleSchema);
