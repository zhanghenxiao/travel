<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs">
      返回
    </router-link>
    <div class="header-fixed" v-show="showFixed" :style="opacityStyle">景点详情</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      showFixed: false,
      // 渐隐渐现的效果是通过修改opacity
      opacityStyle: {
        opacity: 0,
      }
    }
  },
  components: {
  },
  // 我们使用了keepalive mounted只触发一次
  mounted() {
    console.log('111')
  },
  // 我们使用了keepalive mounted deactivated会触发多次
  activated() {
    // 绑定的是在window上面的 是全局的  在组件外也会生效会导致bug  故需要解绑
    window.addEventListener('scroll',this.getScroll)
  },
  deactivated() {
    window.removeEventListener('scroll',this.getScroll)
  },
  methods: {
    // js 中操作style 样式
    getScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60 ) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        // this.opacityStyle = {
        //   color: 'red'
        // }
        this.showFixed = true
      }else {
        this.showFixed = false
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~styles/global';
.header
  text-align center
  .header-abs
    position absolute
    top .4rem
    left 0
    height .4rem
    line-height .4rem
    border-radius .2rem
    color #fff
    background-color rgba(0,0,0,.6)
  .header-fixed
    position fixed
    top 0
    left: 0;
    right 0
    height .6rem
    line-height .6rem
    background-color $bgc

</style>
