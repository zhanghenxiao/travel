<template>
    <div>
        <ul class="list">
            <li>A</li>
            <li>A</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Alphabet',
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
</style>