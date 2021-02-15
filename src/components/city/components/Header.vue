<template>
    <div class="header">
        城市选择
        <router-link to='/'>
            <div class="header-back">返回</div>
        </router-link>
        
    </div>
</template>

<script>
export default {
    name: 'Header',
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
@import '~styles/global';
.header
    position: relative;
    height .86rem
    line-height .86rem
    text-align center
    background-color: $bgc;
    .header-back
        position absolute
        left 0
        top 0
        color #fff
</style>