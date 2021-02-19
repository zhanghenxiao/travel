<template>
  <div>
      <div class="banner" @click="handleBannerClick">
        <div class="banner-img">
          <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
        </div>
        <div class="banner-info">
          <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
          <div class="number">39</div>
        </div>
      </div>
      <commonGallary :imgs='imgs' v-show="showGallary" @change="change"></commonGallary>
  </div>  
</template>

<script type="text/ecmascript-6">
import commonGallary from '@/common/gallary/Gallary' 
export default {
  data() {
    return {
      imgs: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"],
      showGallary: false,
    }
  },
  components: {
    commonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    change () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus">
.banner
  position: relative;

// 防止图片加载时抖动,这是布局的本意
    .banner-img
      overflow hidden
      height 0
      // 图片的宽高比 高/宽  330/600= 0。55
      padding-bottom 55.5%
      img
        width 100%
    .banner-info
      display flex
      position absolute
      left: 0;
      right 0
      bottom 0
      line-height .6rem
      color: #fff;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      // background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8) )
      .banner-title
        flex 1
        padding-left .2rem
        font-size .32rem
      .number
        height .4rem
        line-height .4rem
        padding 0 .2rem 0
        border-radius .2rem
        background-color rgba(0,0,0,.8)

</style>
