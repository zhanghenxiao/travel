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
  name: 'detail',
  data() {
    return {
      list: []
    }
  },
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    async getDetail () {
      let {data} = await this.$http.get('/api/detail.json',{
        params:{
          id: this.$route.params.id
        }
      })
      this.list = data.data.categoryList
    }
  }
}
</script>

<style lang="stylus">
.content
    height 120rem
</style>
