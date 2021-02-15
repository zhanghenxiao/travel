<template>
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-content">请输入城市</div>
        <div class="header-right">{{city}}</div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        city:String
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