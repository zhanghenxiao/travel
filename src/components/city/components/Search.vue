<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名字或拼音">
    </div>
</template>

<script>
export default {
    name: 'Search',
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
</style>