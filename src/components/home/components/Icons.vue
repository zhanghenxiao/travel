<template>
  <div class="icons">
    <swiper>
      <!-- 由于只有一页故 swiper只有一个，我们需要遍历pages 达到多个swiper的目的 -->
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img" >
            <img
              :src= item.imgUrl
              alt=""
            />
          </div>
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- 为了演示滑动效果-->
      <!-- <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img
              src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
              alt=""
            />
          </div>
          <p>景点门票</p>
        </div>
      </swiper-slide> -->
    </swiper>
    <!-- 达到预期分页 -->
    <!-- <div>{{pages}}</div> -->
  </div>
</template>

<script>
export default {
  name: "Icons",
  data() {
    return {
    "iconList": [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        "desc": "景点门票"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
        "desc": "滑雪季"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        "desc": "泡温泉"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
        "desc": "动植园"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
        "desc": "游乐园"
      }, {
        "id": "0006",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
        "desc": "必游榜单"
      }, {
        "id": "0007",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
        "desc": "演出"
      }, {
        "id": "0008",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
        "desc": "城市观光"
      },{
        "id": "0009",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
        "desc": "城市观光"
      }],
    };
  },
  // 第9个没在第二页,故需要处理
  computed: {
    pages() {
      // pages = [[1,2,3],[4]]
      const pages = []
      this.iconList.forEach((item,index)=>{
        let page = Math.floor(index / 8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/global';
@import '~styles/mixins';
  // 给icons添加swiper,只有上半位置能进行移动，下半位置无法移动，因为swiper只占了一半，故设置为全占
  .icons >>> .swiper-container
    // 这个也是必加的
    overflow: hidden;
    // 这个可省去,因为icons 是div 标签
    // width: 100%;
    height: 0;
    // 宽高比是2:1  往下撑是 高度占宽度的50%要这样写。。。  w:375.2 h:187.6
    padding-bottom: 50%;
    // background: yellow;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    height 0
    width: 25%;
    // 宽高比 1:1
    padding-bottom: 25%;
    // background-color: red;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0
      bottom: 0.44rem; // 22px
      box-sizing border-box
      padding .1rem
      // background-color: blue;
      img {
        display block
        margin 0 auto
        height: 100%;
      }
    }
    p {
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      color $textColor
      // 做文字省略的效果
      // overflow hidden
      // white-space nowrap
      // text-overflow ellipsis
      ellipsis() 
   }
  }

</style>