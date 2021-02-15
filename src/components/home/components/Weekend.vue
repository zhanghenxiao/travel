<template>
    <div>
        <div class="hot">周末去哪儿</div>
        <ul class="item-wrapper">
            <!-- 1px 下边框的使用 border-bottom -->
            <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
                <div class="item-img-wrapper">
                   <img  class="item-img" :src="item.imgUrl" alt=""> 
                </div> 
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Weekend',
    data() {
        return {
            "weekendList": [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
        "title": "北京温泉排行榜",
        "desc": "细数北京温泉，温暖你的冬天"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
        "title": "北京必游TOP10",
        "desc": "来北京必去的景点非这些地方莫属"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
        "title": "寻找北京的皇城范儿",
        "desc": "数百年的宫廷庙宇，至今依旧威严霸气"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
        "title": "学生最爱的博物馆",
        "desc": "周末干嘛？北京很多博物馆已经免费开放啦"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
        "title": "儿童剧场，孩子的乐园",
        "desc": "带宝贝观看演出，近距离体验艺术的无穷魅力"
      }]
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins';
.hot 
    line-height .66rem
    background-color #eee
    // 第一行缩进 .24rem
    text-indent .24rem

.item-img-wrapper
    // 往下撑开的新一种写法 图片原本是640x214  故宽高比是214/640 = 33.5%
    overflow: hidden;
    height 0
    padding-bottom 33.5%
    .item-img
        // 这里图片不是是定宽定高的 需要一个容器
        // width: 1.7rem;
        // height: 1.7rem;
        // padding .1rem
        width 100%
.item-info
    flex: 1;
    // 由于在flex布局设置省去号失效，故加min-windth: 0
    min-width: 0;
    padding .1rem
    .item-title
        margin .1rem 0
        ellipsis()
    .item-desc
        padding .2rem 0
        color #ccc
        ellipsis()
    

</style>