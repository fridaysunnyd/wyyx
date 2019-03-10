<template>
    <div id="wrap">
      <div class="header_wrap">
        <header>
          <div class="top">
            <div class="left">
              <a href="##">
                <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
              </a>
            </div>
            <div class="center">
              <i class="iconfont icon-sousuo"></i>
              <span>搜索商品, 共21894款好物</span>
            </div>
            <div class="right" @click="$router.push('/personal')">登录</div>
          </div>
          <nav class="bottom">
            <div class="nav_list">
              <ul ref="scrollItems" class="nav_inner">
                <li>推荐</li>
                <li>商品2</li>
                <li>商品3</li>
                <li>商品4</li>
                <li>商品5</li>
                <li>商品6</li>
                <li>商品7</li>
                <li>商品8</li>
                <li>商品9</li>
              </ul>
            </div>
            <div class="more">
              <i class="iconfont icon-xia"></i>
            </div>
          </nav>
        </header>
      </div>
      <div class="main">
        <div class="banner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/9e38d79e8a381812cb1937aa18301a9e.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/27ed2c9546d04dcdbc9e7a8b72259be2.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/ed3c5a043b801a9fd225b0ab4a30729b.png?imageView&amp;quality=75&amp;thumbnail=750x0">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <Promise />
        <div class="menu">
          <div class="menu_item">
            <img class="img" src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
            <span>居家生活</span>
          </div>
          <div class="menu_item">
            <img class="img" src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
            <span>居家生活</span>
          </div>
          <div class="menu_item">
            <img class="img" src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
            <span>居家生活</span>
          </div>
          <div class="menu_item">
            <img class="img" src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
            <span>居家生活</span>
          </div>
          <div class="menu_item">
            <img class="img" src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
            <span>居家生活</span>
          </div>
          <div class="menu_item">
            <img class="img" src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
            <span>居家生活</span>
          </div>
          <div class="menu_item">
            <img class="img" src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
            <span>居家生活</span>
          </div>
          <div class="menu_item">
            <img class="img" src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
            <span>居家生活</span>
          </div>
          <div class="menu_item">
            <img class="img" src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
            <span>居家生活</span>
          </div>
          <div class="menu_item">
            <img class="img" src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
            <span>居家生活</span>
          </div>
        </div>
        <Splice />
        <div class="ad01">
          <img src="https://yanxuan.nosdn.127.net/15519407811151838.gif?imageView&thumbnail=750x0&quality=75" alt="">
          <div class="ad01_sub">
            <img src="https://yanxuan.nosdn.127.net/15519407902381839.jpg?imageView&thumbnail=375x0&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/15519407902381839.jpg?imageView&thumbnail=375x0&quality=75" alt="">
          </div>
        </div>
        <Splice />
        <div class="ad02">
          <div class="title">
            <div class="name">
              <span>限时购</span>
              <div class="time">
                <span>11</span>
                <span>:11</span>
                <span>:11</span>
              </div>
            </div>
            <div class="more">
              更多>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <img src="http://yanxuan.nosdn.127.net/2235d45a1827387551079e9f244a8df0.png?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="price">
                <span class="now">$8888</span>
                <span class="once">$1111</span>
              </div>
            </div>
            <div class="item">
              <img src="http://yanxuan.nosdn.127.net/2235d45a1827387551079e9f244a8df0.png?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="price">
                <span class="now">$8888</span>
                <span class="once">$1111</span>
              </div>
            </div>
            <div class="item">
              <img src="http://yanxuan.nosdn.127.net/2235d45a1827387551079e9f244a8df0.png?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="price">
                <span class="now">$8888</span>
                <span class="once">$1111</span>
              </div>
            </div>
            <div class="item">
              <img src="http://yanxuan.nosdn.127.net/2235d45a1827387551079e9f244a8df0.png?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="price">
                <span class="now">$8888</span>
                <span class="once">$1111</span>
              </div>
            </div>
            <div class="item">
              <img src="http://yanxuan.nosdn.127.net/2235d45a1827387551079e9f244a8df0.png?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="price">
                <span class="now">$8888</span>
                <span class="once">$1111</span>
              </div>
            </div>
            <div class="item">
              <img src="http://yanxuan.nosdn.127.net/2235d45a1827387551079e9f244a8df0.png?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="price">
                <span class="now">$8888</span>
                <span class="once">$1111</span>
              </div>
            </div>
          </div>
        </div>
        <Splice />
        <div class="ad03">
          <div class="banner">
            <img src="https://yanxuan.nosdn.127.net/881533d9e66e57566114b85b67ab2205.jpg?imageView&thumbnail=750x0&quality=75" alt="" >
          </div>
          <div class="ad_list_wrap">
            <div ref="adScrollItems" class="ad_list">
              <div class="ad_item">
                <img src="http://yanxuan.nosdn.127.net/262d026973991dc280f2843c4417a822.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span class="des">100%山羊绒纯色围巾</span>
                <span class="price">$1111</span>
              </div>
              <div class="ad_item">
                <img src="http://yanxuan.nosdn.127.net/262d026973991dc280f2843c4417a822.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span class="des">100%山羊绒纯色围巾</span>
                <span class="price">$1111</span>
              </div>
              <div class="ad_item">
                <img src="http://yanxuan.nosdn.127.net/262d026973991dc280f2843c4417a822.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span class="des">100%山羊绒纯色围巾</span>
                <span class="price">$1111</span>
              </div>
              <div class="ad_item">
                <img src="http://yanxuan.nosdn.127.net/262d026973991dc280f2843c4417a822.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span class="des">100%山羊绒纯色围巾</span>
                <span class="price">$1111</span>
              </div>
              <div class="more">
                <span>
                  查看更多>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Splice />
        <footer>
          <div class="go">
            <div>
              下载app
            </div>
            <div>
              电脑版
            </div>
          </div>
          <div class="des">
            <span>
              网易公司版权所有 © 1997-2019
            </span>
            <br/>
            <span>
              食品经营许可证：JY13301080111719
            </span>
          </div>
        </footer>
      </div>
    </div>
</template>

<script>
  import Promise from '../../components/Promise/Promise.vue'
  import Splice from '../../components/Splice/Splice.vue'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    components:{
      Promise,
      Splice
    },
    mounted(){
      this.initListScroll (this.$refs.scrollItems)
      this.initListScroll (this.$refs.adScrollItems)
      this.$nextTick(() =>{
        new BScroll('.nav_list',{
          scrollX: true,
          click: true
        })
        new BScroll('.ad_list_wrap',{
          scrollX: true,
          click: true
        })
      })
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    methods:{
      initListScroll (ref) {// todo
        const listWrapper = ref
        let width = 0
        let length = listWrapper.children.length
        while (length) {
          width += listWrapper.children[length-1].offsetWidth*1.5
          length--
        }
        console.log(width);
        ref.style.width = width + 50 + 'px'
      },

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #wrap
    position relative
    display flex
    flex-direction column
    .header_wrap
      height 75px
      width 10rem
      background-color: #fff;
      clearFix()
      header
        position fixed
        top 0
        z-index 5
        width 100%
        .top
          display flex
          justify-content space-between
          align-items center
          padding: .21333rem .4rem;
          background-color: #fff;
          .left
            width: 1.84rem;
            height: .53333rem;
            img
              width 100%
              height 100%
          .center
            display flex
            justify-content center
            padding-left  .55rem
            padding-right  .55rem
            height: .74667rem;
            line-height .74667rem
            font-size: .37333rem;
            color: #666;
            background-color: #ededed;
            border-radius: .10667rem;
            i
              margin-right: .13333rem;
          .right
            width: .98667rem;
            height: .53333rem;
            line-height: .53333rem;
            text-align: center;
            color: #b4282d;
            border: 1px solid #b4282d;
            border-radius: .10667rem;
            font-size: .32rem;
        nav
          position relative
          background-color: #fff;
          .nav_list
            height 30px
            padding-right 1.33333rem
            padding-left .5rem
            overflow hidden
            .nav_inner
              height: .8rem;
              color #666
              font-size: .37333rem;
              li
                float left
                height 100%
                line-height 28px
                padding: 0 .21333rem;
                text-align center
          .more
            position absolute
            right 0
            top 0
            width: 1.33333rem;
            height: .8rem;
            line-height .8rem
            text-align: center;
            background: #fff;
            color #666
    .main
      .banner
        height 200px
        .swiper-container
          width 100%
          height 100%
          .swiper-pagination
            width 100%
            bottom .4rem
            .swiper-pagination-bullet
              width: .53333rem;
              height: .05333rem;
              display: inline-block;
            .swiper-pagination-bullet-active
              opacity: 1;
              background: #fff;
              border-radius: 0;
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              width 100%
              height 100%
              position relative
              img
                height auto
                width 100%
      .menu
        display flex
        flex-wrap wrap
        justify-content space-around
        padding-bottom: .69333rem;
        .menu_item
          width: 1.46667rem;
          height: 2.08rem;
          display flex
          flex-direction column
          align-items center
          margin: .13333rem .26667rem 0;
          img
            width: 1.46667rem;
            height: 1.46667rem;
            margin-bottom .2rem
          span
            font-size: .32rem;
      .ad01
        padding-top .3rem
        img
          width: 100%;
          height: auto;
        .ad01_sub
          display flex
          img
            width: 50%;
            height: 100%;
      .ad02
        .title
          box-sizing border-box
          width: 100%;
          height: 1.33333rem;
          line-height: 1.33333rem;
          padding: 0 .4rem;
          background: #fff;
          overflow: hidden;
          font-size: .42667rem;
          font-family: PingFangSC-Regular;
          color #666
          .name
            float left
            span
              float left
              margin-right .2rem
            div
              float right
          .more
            float right
        .list
          display flex
          flex-wrap wrap
          justify-content space-around
          .item
            width 3rem
            height 3.5rem
            display flex
            flex-direction column
            align-items center
            img
              background: $gray;
              width: 2.88rem;
              height: 2.88rem;
            .price
              .now
                display block
                float left
                font-size: .37333rem;
                color: $red;
                margin-right: .16rem;
              .once
                display block
                float right
                font-size: .32rem;
                color: #7F7F7F;
                text-decoration:line-through
      .ad03
        width 100%
        .banner
          width 100%
          margin-bottom: .26667rem;
          img
            width 100%
        .ad_list_wrap
          width 100%
          overflow hidden
          .ad_list
            display flex
            padding: 0 .4rem .4rem;
            .ad_item
              width: 2.66667rem;
              display flex
              flex-direction column
              justify-content space-between
              margin-right: .26667rem
              img
                width 100%
                height auto
                margin-bottom: .16rem
              .des
                font-size: .32rem;
                margin-bottom: .16rem
              .price
                color: $red
                font-size: .32rem;
            .more
              width: 2.66667rem;
              height 100%
              background-color: $gray;

      footer
        width 100%
        margin-bottom 1.30667rem
        background: #414141;
        display flex
        flex-direction column
        align-content center
        justify-content: space-around
        text-align: center;
        padding: .72rem .26667rem .37333rem;
        box-sizing border-box
        .go
          margin 0 auto
          div
            float left
            width: 2.29333rem;
            margin-right: .66667rem;
            border: 1px solid #ccc
            text-align center
            font-size: .32rem;
            color: #fff;
        .des
          margin-top .22rem
          font-size: .32rem;
          line-height: .42667rem;
          color: #999;

</style>
