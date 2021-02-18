<template>
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-content">请输入城市</div>
        <router-link to="/city">
            <div class="header-right">{{double}}</div>
        </router-link>   
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    name: 'Header',
    data() {
        return {
            
        };
    },
    computed: {
        // 把state中city值 同时以city命名导出到计算属性中
        // ...mapState(['city'])
        // 导出是数组 同样也可以是对象
        ...mapState({
            current: 'city'
        }),
        ...mapGetters(['double'])
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="stylus" scoped>
@import '~styles/global.styl'
// 1rem = html font-size = 50px,由于设计稿是二倍图，需要乘以2  故简化rem 运算
.header
    display flex
    line-height: .86rem
    background-color $bgc
    .header-left
        float left
        color: #fff
    .header-content
        flex: 1
        margin: .12rem
        height: .62rem
        line-height: .62rem
        background-color #ffffff
        border-radius .15rem
        padding 0 .3rem 0
    .header-right
        float right
        color: #fff
</style>