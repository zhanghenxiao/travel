<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名字或拼音">
        </div>
        <div class="search-content" v-show="keyword" ref="search">
            <ul>
                <!-- 检测到重复键 故加index-->
                <li class="border-bottom" v-for="(item,index) in list" :key="index"  @click="handleChangeCity(item)">{{item}}</li>
                <li v-show="hasNoData">没有匹配到数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'Search',
    props: {
        citylist: Object
    },
    data() {
        return {
            // 用户输入的关键字
            keyword: '',
            // 匹配到的数据
            list: [],
            // 节流使用
            timer: null
        };
    },
    mounted() {
        // 页面内元素滚动
        this.scroll = new Bscroll(this.$refs.search)
    },
    methods: {
        handleChangeCity(name) {
            console.log(name);
            // this.$store.dispatch('change',name)
            this.$store.commit('change',name)
            this.$router.push('/')
        }
    },
    watch: {
        keyword() {
            // 节流
            if (this.timer) {
                clearTimeout(this.timer)
            }
            // 没有值输入 清空list
            if (!this.keyword) {
                this.list = []
                return
            }
            // 节流
            this.timer = setTimeout(()=>{
                let searchList = []
                for (let item in this.citylist) {
                    this.citylist[item].forEach(el => {
                        if (el.name.indexOf(this.keyword) >-1 || el.spell.indexOf(this.keyword) >-1) {
                            searchList.push(el.name)
                        }
                    });
                }
                this.list = searchList
            },100)  
        }
    },
    computed: {
        hasNoData() {
            return !this.list.length
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/global';
.search
    height .72rem
    padding 0 .1rem
    background-color $bgc
    .search-input
        height: .62rem;
        width: 100%;
        border-radius .1rem
        text-align center
        padding: 0 .1rem;
        box-sizing border-box
.search-content
    z-index: 1;
    //overflow hidden 超出的盒子高度的内容隐藏  变相的控制盒子无法滚动！！
    overflow hidden
    position: absolute;
    top: 1.47rem;
    left 0
    right 0
    bottom 0
    background-color #eee
    li
        line-height .44rem
        padding-left .2rem
        background-color #fff
</style>