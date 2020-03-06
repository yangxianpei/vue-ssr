const merge=require('webpack-merge')
const base = require('./webpac.base')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
let resolve=(strpath)=>{
    return path.resolve(__dirname,strpath)
}
module.exports=merge(base,{
    entry:{
        client:resolve('../src/client-entry.js')
    },
    plugins:[
         new htmlWebpackPlugin({
            filename:'index.html',
            template:resolve('../public/index.html')
        })
    ]
})