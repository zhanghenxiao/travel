<template>
  <div class="container" @click="handleConclick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
            <img class="swiper-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    imgs: {
      type: Array,
      // default() {
      //   return []
      // }
    }
  },
  data() {
    return {
      // showGallary: false,
      // awesome-swiper 是基于swiper3 封装的
      swiperOptions: {
        // 使用分页器
        pagination: '.swiper-pagination',
        // 页数展示
        paginationType: 'fraction',
        // 监听页面刷新  重新计算宽高
        observeParents: true,
        observer: true
      }
    }
  },
  components: {
  },
  methods: {
    handleConclick () {
      this.$emit('change')
    }
  }
}
</script>

<style lang="stylus" scoped>
// 穿透 直接无视scoped   本身也有个overflow: hidden会导致页数无法显示
.container >>> .swiper-container
  overflow inherit
.container
  z-index: 99;
  display flex
  flex-direction column
  justify-content center
  position fixed
  top 0 
  bottom 0
  left 0
  right 0
  background-color #000
  .wrapper
    // 防止加载图片时 页面抖动 撑开一个一个正方形
    // bottom -.8rem 会导致页数无法显示
    // overflow: hidden;
    height: 0;
    width 100%
    padding-bottom 100%
    img
      width 100%
    .swiper-pagination
      bottom -.8rem
      color #fff 

</style>
