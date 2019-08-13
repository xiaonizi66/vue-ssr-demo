import Vue from 'vue'
import Foo from './components/Foo.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default () => {
    const router = new VueRouter({
        mode: 'history',
        routes: [{
                path: '/',
                component: Foo
            },
            {
                path: '/bar',
                component: () => import('./components/Bar.vue')
            },
        ]
    })
    return router
}