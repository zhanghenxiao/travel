<template>
    <div>
        <ul class="list">
            <!-- <li v-for="(item,key) in citylist" :key="key" :ref="key" @click="handleClick">{{key}}</li> -->
            <!-- touchstart等 是vue自带的事件不能更改
            touchstart会在你第一次触碰到它时候触发
            touchmove就是你一直点着不松手的时候触发
            touchend就是你的手刚刚移开的时候触发
            vue里面touch事件的应用：https://segmentfault.com/a/1190000022422084
             -->
            <li v-for="item in letters" :key="item" :ref="item"
             @click="handleClick"
             @touchstart="handleTouchStart"
             @touchmove="handleTouchMove"
             @touchend="handleTouchEnd"
             >
             {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
import event from '../../../event'
export default {
    name: 'Alphabet',
    props: {
        citylist: Object
    }, 
    data() {
        return {
            // 标示位
            touch: false,
            // 4.A 的offsetTop高度
            startY: 0,
            timer: null
        };
    },
    mounted() {
        
    },
    updated() {
        // 5.页面数据开始是空的 ajax获取数据回来后，会重新渲染页面，此时在会获取dom高度 才是没问题的
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleClick (e) {
            // e是原生的
            // console.log(e);
            // 点击的是哪个Dom
            // innerHTML得到的值有多个空格的情况导致无法切换到对应的元素 innerText无异常
            // console.log(e.target.innerText);
            let dom = e.target.innerText
            event.$emit('change', dom)
        },
        handleTouchStart () {
            this.touch = true
        },
        handleTouchMove (e) {
            if (this.touch) {
                // 6. 我们需要做个节流函数 提高性能
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    // 1.索引0 才是真正的dom 
                    // let startY = this.$refs['A'][0].offsetTop
                    let touchY = e.touches[0].clientY - 74
                    // 2.（A元素距离绿色底部的高度 - （元素页面的高度-绿色的高度=这个元素距离底部的高度））/ 20 每个元素占的高度 = 索引的位置 
                    let index = Math.floor((touchY-this.startY)/20)
                    // 3.console.log(index); // 0, 1 ,2
                    if (index >= 0 && index < this.letters.length)
                    event.$emit('change',this.letters[index])
                },16)
                
            }
        },
        handleTouchEnd () {
            this.touch = false
        }
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.citylist) {
                letters.push(i)
            }
            // ['A','B']
            return letters
        }
    },
};
</script>

<style lang="stylus" scoped>
@import '~styles/global.styl';
.list
    // 字母垂直居中 采用flex布局
    display flex
    flex-direction column
    justify-content center
    // left right 0 是控制方位的
    position absolute
    top 1.46rem
    right 0
    bottom 0

    li
        line-height .4rem
        text-align center
        color $bgc
</style>