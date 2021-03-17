# Blog

Blog是一个基于vue和node的小小小博客
前端用vue，后端用Koa2

# 快速入门

### 技术栈

- 前端： 
  - 用户端：[vue](https://cn.vuejs.org/)、[tailwindcss](https://www.tailwindcss.com/) 
  - admin端：[vue](https://cn.vuejs.org/)、[Ant Design of Vue](https://www.antdv.com/)
- 后端: [koa](https://koa.bootcss.com/)、[mongodb](https://www.mongodb.com/)

### 本地运行

安装[MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)数据库和[Node.js](https://nodejs.org/en/)环境。

``` bash
# 安装服务端依赖
npm install
# 运行服务
npm run dev

# 安装用户端依赖
npm install
# 运行用户端项目
npm run serve

# 安装后台依赖
npm install
# 运行后台项目
npm run serve

# 即可通过 http://127.0.0.1:3000访问
```

## 项目目录

```
| blog-admin            后台管理系统
| blog-home             用户端
| blog-serve            后台
| .gitignore            git配置
```

### 打包

```bash
# 在前台和后台目录分别
npm run build
# 在项目根目录
npm install
# 启动
npm start
```


 

