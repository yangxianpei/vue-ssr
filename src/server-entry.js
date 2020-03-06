import CreateApp from './main'

//服务端需要调用当前这个文件产生一个新的vue
export default ()=>{
    let {app}=CreateApp()
    return app
}
//服务端配置好需要导出给node使用