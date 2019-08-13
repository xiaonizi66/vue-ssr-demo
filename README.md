
## 项目运行
```
git clone https://github.com/xiaonizi66/vue-ssr-demo  
```
## Project setup
```
npm install
```
## build sever
```
npm run server:build
```
## build cilent
```
npm run cilent:build
```
## run server
```
nodemon server.js
```

## 技术栈

vue + vuex + vue-router + webpack +ES6/7 + less + koa

## 项目简介

### VUE SSR
```
如不了解VUE SSR 请先阅读 [官方文档](https://ssr.vuejs.org/)
服务器端渲染 (SSR) 简单demo (不包含 Ajax 数据)
SSR优点：
    更好的 SEO；
    更快的内容到达时间；
```
### 项目布局

```
├── build                                       // 配置文件
│   │── webpack.base                            // 公共配置
│   │── webpack.client                          // 生成Client Bundle的配置
│   │── webpack.server                          // 生成Server Bundle的配置
├── dist                                        // 项目打包路径
├── public                                      // 模板文件
│   │── index.html                              // Client模板html文件
│   │── index.ssr.html                          // Server模板html文件
├── src                                         // 源码目录
│   ├── assets                                  // 图片目录
│   ├── components                              // 组件
│   │   ├── Bar.vue                             // Bar测试组件
│   │   ├── Foo.vue                             // Foo测试组件
│   │── App.vue                                 // Vue应用的根组件
│   │── main.js                                 //  入口基础文件
│   ├── client-entry.js                         // 浏览器环境入口
│   ├── server-entry.js                         // 浏览器环境入口
│   │   ├── router.js                           // 路由配置
│   │   ├── store.js                            // vuex的状态管理
├── favicon.ico                                 // 图标
```
