<template>
  <div>
    <!-- keep-alive 路由被加载过一次后就会把内容放到内存中,会激发新的activated生命周期钩子,exlude忽略detail这个组件 -->
    <keep-alive exclude="detail">
      <!-- 路由容器-->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>

</style>
