<template>
  <!-- npm install swiper vue-awesome-swiper@2.6.7 --save 这个是稳定版本 -->
  <div class="wrapper">
    <swiper :options="swiperOptions">
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return {
            swiperOptions: {
                // 分页
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [
                {
                    id: "0001",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
                },{
                    id: "0002",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
                }
                ]
        }
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="stylus" scoped>
// 样式穿透 意思是.wrapper 只要出现swiper-pagination-bullet-active 我们就设置相应的样式 就不会受scoped样式
.wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
.wrapper
    // 这个也是必加的 overflow hidden
    overflow hidden
    width 100%
    // 这个也是必加的 height 0
    height 0
    // fast 3G 是testdiv样式会顶上去
    // 图片w:640 h:200  高度占宽度的比例是31.25%，图片宽高比例始终自适应保持在31.25% 也可写成width:100% height:31.25vw 有兼容性问题
    padding-bottom 31.25%
    background-color #eee
    // 样式不会生效因为scoped 修饰的是当前组件的样式!!这是个细节 ，不会修饰swiper组件的样式！ ，可以去掉scoped,但是不是我们想要的
    // .swiper-pagination-bullet-active
    //     background-color red
    .swiper-img
        width 100%

</style>