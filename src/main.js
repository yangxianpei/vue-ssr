import Vue from 'vue'
import App from './App'

export default () => {
    let app=new Vue({
        render: h => h(App)
    })
    return {app}
}
