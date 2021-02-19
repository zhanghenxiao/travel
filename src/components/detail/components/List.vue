<template>
  <div>
    <div class="item" v-for="(i,index) in list" :key="index">
      <span class="item-icon"></span>
      <div class="item-tile border-bottom">{{i.title}}</div>
      <!-- 递归组件 先判断是否存在children字段  在传入数据 -->
      <div v-if="i.children" class="children">
        <list :list='i.children'></list>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'list',
  props: {
    list: Array
  },
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style lang="stylus">
.item-icon
  // 使用了精灵图
  position: relative
  left: .15rem
  top: .75rem
  display: inline-block
  width: .36rem
  height: .36rem
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
  margin-right: .1rem
  background-size: .4rem 3rem
.item-tile
  padding: .4rem .7rem 0;

.children 
  padding-left .7rem
</style>
