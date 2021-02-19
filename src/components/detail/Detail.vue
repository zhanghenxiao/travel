<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list='list'></detail-list>
    <div class="content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import detailBanner from './components/Banner'
import detailHeader from './components/Header'
import detailList from './components/List'
export default {
  data() {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '12'
        }]
      },{
        title: '儿童票'
      }]
    }
  },
  components: {
    detailBanner,
    detailHeader,
    detailList
  }
}
</script>

<style lang="stylus">
.content
    height 120rem
</style>
