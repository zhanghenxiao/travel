<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import detailBanner from './components/Banner'
import detailHeader from './components/Header'
export default {
  data() {
    return {
    }
  },
  components: {
    detailBanner,
    detailHeader
  }
}
</script>

<style lang="stylus">
.content
    height 120rem
</style>
