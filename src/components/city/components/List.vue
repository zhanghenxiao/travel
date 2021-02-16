<template>
    <div class="list" ref="list">
        <div>
            <div class="area">
                <div class="area-title border-topbottom">当前城市</div>
                <div class="area-city">
                    <div class="city-wrapper">
                        <div class="city">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="area-title border-topbottom">热门城市</div>
                <div class="area-city">
                    <div class="city-wrapper" v-for="item in hotlist" :key="item.id">
                        <div class="city">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) in citylist" :key="key">
                <div class="area-title border-topbottom">{{key}}</div>
                <ul class="item-list" v-for="i in item" :key="i.id">
                    <li class="item border-bottom">{{i.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'List',
    props: {
        hotlist: Array,
        citylist: Object,
    },
    data() {
        return {
            
        };
    },
    mounted() {
        // 使用better-scroll注意布局样式
        let bs = new BScroll(this.$refs.list)
    },
    methods: {
        
    },
};
</script>

<style lang="stylus" scoped>
.border-topbottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
.border-bottom
    &:before
        border-color #ccc
.list
// 产生上下进度条的原因是没设置overflow hidden
    overflow hidden
    position absolute
    top 1.46rem
    left 0
    right 0
    bottom 0
    // background-color red
    .area
        .area-title
            height .32rem
            line-height .32rem
            background-color #eee
            padding 0 .2rem
            color #666
            font-size .26rem
        .area-city
            // overflow: hidden;触发BFC
            overflow: hidden;
            padding .1rem .6rem .1rem .1rem
            .city-wrapper
                float left
                width 33.33%
                .city
                    margin .1rem
                    padding .1rem 0
                    border: .02rem solid #000
                    text-align center
                    border-radius .1rem
        
        .item-list
            // background-color #eee
            .item
                padding-left .2rem
</style>