<template>
  <div>
    <!-- keep-alive 路由被加载过一次后就会把内容放到内存中,会激发新的activated生命周期钩子 -->
    <keep-alive>
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
