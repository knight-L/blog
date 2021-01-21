/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 21:07:42
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-20 13:10:33
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
    "@typescript-eslint/no-explicit-any": ["off"],
  },
};
