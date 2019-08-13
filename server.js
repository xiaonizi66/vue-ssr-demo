const Koa = require('koa')
const Router = require('koa-router')
const server = new Koa()
const router = new Router()
const path = require('path')
const static = require('koa-static')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
//渲染打包后的结果
const template = fs.readFileSync(path.resolve(__dirname, './dist/index.ssr.html'), 'utf8')
//客户端manifest.json
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const render = createBundleRenderer(serverBundle, {
    template, // 模板里必须要有 vue-ssr-outlet
    clientManifest
})
router.get('/', async ctx => {
    ctx.body = await new Promise((resolve, reject) => {
        render.renderToString({
            url: '/'
        }, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
})
server.use(router.routes())


// koa 静态服务中间件
server.use(static(path.resolve(__dirname, './dist')))

server.use(async ctx => {
    try {
        ctx.body = await new Promise((resolve, reject) => {
            render.renderToString({
                url: ctx.url
            }, (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        })
    } catch (e) {
        ctx.body = '404'
    }
})


server.listen(3002, () => {
    console.log('服务器已启动！')
})