<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <!-- 测试swiper 的样式是否ok 在netwrok fast 3g的情况下 -->
        <!-- <div>test</div> -->
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
    },
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style>

</style>