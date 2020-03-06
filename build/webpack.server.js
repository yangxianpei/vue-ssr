const merge=require('webpack-merge')
const base = require('./webpac.base')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
let resolve=(strpath)=>{
    return path.resolve(__dirname,strpath)
}
module.exports=merge(base,{
    entry:{
        server:resolve('../src/server-entry.js')
    },
    target:'node',//告诉他给node使用
    output:{
        libraryTarget:'commonjs2' //es模块转行成commonjs模块
    },
    plugins:[
         new htmlWebpackPlugin({
            filename:'index.ssr.html',
            template:resolve('../public/index.ssr.html'),
            excludeChunks:['server'] //排除某个模块
        })
    ]
})