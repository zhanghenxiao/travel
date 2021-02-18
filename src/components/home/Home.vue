<template>
    <div>
        <home-header></home-header>
        <home-swiper :list='swiperList'></home-swiper>
        <home-icons></home-icons>
        <!-- 测试swiper 的样式是否ok 在netwrok fast 3g的情况下 -->
        <!-- <div>test</div> -->
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data() {
        return {
            // city: '',
            // 标识是否需重新发请求
            lastCity: '',
            swiperList: []
        };
    },
    computed: {
        // 需要同步city 数据才行
        ...mapState(['city'])
    },
    mounted() {
        // 发axios 很强大 在浏览器发xhr 在服务端会发http请求
        // 我们在每个组件发请求 那就需要发5次http请求明显不利用我们的性能 我们放在home组件中总共发一次然后传值给子组件
        // 在webpack 的项目中只有static这个目录能被外部访问，故我们的模拟数据放在static下
        // 
        this.getHomeInfo()
        this.lastCity = this.city
    },
    methods: {
        async getHomeInfo(){
        // '/static/mock/index.json'线上项目这样的接口很明显是不行的 需要的是这样的'/api/index.json'
        // vue提供了代理转发机制proxyTable 在config目录中index.js
        //  let {data} = await this.$http.get('/static/mock/index.json')
        let {data:{data}} = await this.$http.get('/api/index.json?city=' + this.city) 
        //  this.city = data.city
         this.swiperList = data.swiperList
        }
        
    },
    activated() {
        // 城市改变时 再次发请求
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    },
};
</script>

<style>

</style>