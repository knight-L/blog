/*
 * @Description:Eslint配置文件
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-30 21:19:07
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-05 11:16:57
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 禁止出现警告
    "@typescript-eslint/no-explicit-any": ["off"],
    // 禁止出现空代码块，允许 catch 为空代码块
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
  },
};
