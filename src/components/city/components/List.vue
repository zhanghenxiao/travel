<template>
    <div class="list" ref="list">
        <div>
            <div class="area">
                <div class="area-title border-topbottom">当前城市</div>
                <div class="area-city">
                    <div class="city-wrapper">
                        <div class="city">{{city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="area-title border-topbottom">热门城市</div>
                <div class="area-city">
                    <div class="city-wrapper" v-for="item in hotlist" :key="item.id" @click="handleChangeCity(item.name)">
                        <div class="city">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) in citylist" :key="key" :ref="key">
                <div class="area-title border-topbottom">{{key}}</div>
                <ul class="item-list" v-for="i in item" :key="i.id" >
                    <li class="item border-bottom" @click="handleChangeCity(i.name)">{{i.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import event from '../../../event'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'List',
    props: {
        hotlist: Array,
        citylist: Object,
    },
    data() {
        return {
           dom: '' 
        };
    },
    computed: {
        ...mapState(['city'])
    },
    mounted() {
        // 使用better-scroll注意布局样式
        // let 定义的是局部的,下面无法使用，  this才是会挂载在全局
        // let bs = new BScroll(this.$refs.list)
        this.bs = new BScroll(this.$refs.list)
        event.$on('change',this.change)
    },
    methods: {
         change (data) {
            // console.log('on get', data);
            this.dom = data
        },
        handleChangeCity(name) {
            console.log(name);
            // 第一种以action ->mutation
            // this.$store.dispatch('change',name)
            // 第二种直接至 mutation
            // this.$store.commit('change',name)
            // 第三种step2
            this.change(name)
            // 网页也有二个路由跳转a链接 location.herf ,vue 也有二种router-link router.push
            this.$router.push('/')
        },
        // 第三种step1
        ...mapMutations(['change'])
    },
    watch: {
        dom () {
            if(this.dom) {
                // ref是循环出来的是个数组故需取索引  若直接定义的是dom
                let page = this.$refs[this.dom][0]
                // 利用组件通讯，滚动到对应的Dom上去
                this.bs.scrollToElement(page)
            }
        }
    },
    destroyed() {
        event.$off('change',this.change)
    }
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
                line-height .44rem
                padding-left .2rem
</style>