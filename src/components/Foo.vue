<template>
    <div>
        <p @click="handleClick">Foo--{{num}}-点击测试js是否正常</p>
        <p>{{this.$store.state.name}}</p>     
        <p>-----图片分割线----</p>
        <img :src="logo" alt="">
        <img src="../assets/images/kfbg.png" alt="">
    </div>
</template>
<script>
export default {
    data () {
        return {
            num:0,
            logo: require('../assets/images/kfbg.png')
        }
    },
    asyncData (store) {
        // asyncData 方法只在服务端执行，并且只在页面组件中执行
        return store.dispatch('changeName')
    },
    mounted: function() {
        this.$store.dispatch('changeName')
    },
    methods: {
        handleClick() {
           this.num ++;
        }
    }
}
 // vue 优化 pwa+ ssr 实现预缓存效果 //vue多页面一般都用ssr写 //学而思、掘金、新闻类网站用的的ssr
</script>