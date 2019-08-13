import createApp from './main'
// 服务器需要调用当前这个文件产生一个vue实例

export default context => {
    // 涉及到异步组件的问题
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()
        // 设置路由
        router.push(context.url)
        // 返回的实例应跳转到 /     如/bar
        router.onReady(() => {
            const matchs = router.getMatchedComponents()
            console.log(matchs.length)
            if (matchs.length === 0) {
                reject({
                    code: 404
                })
            }
            // matchs匹配到所有的组件，整个都在服务端执行的
            Promise.all(
                matchs.map(component => {
                    if (component.asyncData) {
                        // asyncData 是在服务端调用的
                        return component.asyncData(store)
                    }
                })
            ).then(() => {
                // 以上all中的方法，会改变store中的state
                context.state = store.state; // 把vuex的状态挂载到上下文中，会将状态挂到window上
                resolve(app)
            }).catch(reject)
        }, reject)
    })
}
// 服务器端配置好后，需要导出给node使用