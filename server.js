const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const VueServerRender =require('vue-server-renderer')
const Vue = require('vue')
const fs = require('fs')
let vm=new Vue({
    data(){
        return {msg:'aaa'}
    },
    template:`<div>{{msg}}</div>`
})
const template=fs.readFileSync('./template.html','utf8')
let render =  VueServerRender.createRenderer({
    template
})
router.get('/',async ctx=>{
    ctx.body=await render.renderToString(vm)
})
app.use(router.routes())
app.listen(3000)