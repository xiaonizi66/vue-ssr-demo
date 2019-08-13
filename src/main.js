//入口文件
import Vue from 'vue'
import createRouter from './router'
import App from './App.vue'
import createStore from './store'
import { sync } from 'vuex-router-sync' // 把当前VueRouter状态同步到Vuex中
export default () => {
    const router = createRouter()
    const store = createStore()
    sync(store, router)
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {
        app,
        router,
        store
    }
}