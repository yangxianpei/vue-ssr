const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const VueServerRender = require('vue-server-renderer')
const static = require('koa-static')
const fs = require('fs')
const path = require('path')
const ServerBundle = fs.readFileSync('./dist/server.bundle.js', 'utf8')
const template = fs.readFileSync('./dist/index.ssr.html', 'utf8')
const render = VueServerRender.createBundleRenderer(ServerBundle, {
    template
})
console.log(render);
router.get('/', async ctx => {
    //要写成回调函数否则不会生效
    ctx.body = await new Promise((resolve, reject) => {
        render.renderToString((err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
})
app.use(router.routes())
app.use(static(path.resolve(__dirname,'dist')))
app.listen(3000)
// const Koa = require('koa');
// const Router = require('koa-router')
// const app = new Koa()
// const router = new Router()
// const VueServerRender =require('vue-server-renderer')
// const Vue = require('vue')
// const fs = require('fs')
// let vm=new Vue({
//     data(){
//         return {msg:'aaa'}
//     },
//     template:`<div>{{msg}}</div>`
// })
// const template=fs.readFileSync('./template.html','utf8')
// let render =  VueServerRender.createRenderer({
//     template
// })
// router.get('/',async ctx=>{
//     ctx.body=await render.renderToString(vm)
// })
// app.use(router.routes())
// app.listen(3000)