<template>
    <div id="wrap">
      <Header class="header">
        <div slot="left" class="left">
          <a href="##">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
          </a>
        </div>
        <div slot="center" class="center">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品, 共21894款好物</span>
        </div>
        <div slot="right" class="right">登录</div>
      </Header>
      <nav>
        <div class="nav_list">
          <ul class="nav_inner">
            <li>商品1</li>
            <li>商品2</li>
            <li>商品3</li>
            <li>商品4</li>
            <li>商品5</li>
            <li>商品6</li>
          </ul>
        </div>
        <div class="more">
          <i class="iconfont icon-xia"></i>
        </div>
      </nav>
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
      <div class="ad01">
        <img src="https://yanxuan.nosdn.127.net/15519407811151838.gif?imageView&thumbnail=750x0&quality=75" alt="">
        <div class="ad01_sub">
          <img src="https://yanxuan.nosdn.127.net/15519407902381839.jpg?imageView&thumbnail=375x0&quality=75" alt="">
          <img src="https://yanxuan.nosdn.127.net/15519407902381839.jpg?imageView&thumbnail=375x0&quality=75" alt="">
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../../components/Header/Header.vue'
  import Promise from '../../components/Promise/Promise.vue'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    components:{
      Header,
      Promise
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #wrap
    .header
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
      .nav_list
        padding-right 1.33333rem
        .nav_inner
          height: .8rem;
          color #666
          font-size: .37333rem;
          display flex
          justify-content space-around
          align-items center
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


    .banner
      .swiper-container
        .swiper-slide
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
        span
          font-size: .32rem;
    .ad01
      img
        width: 100%;
        height: auto;
      .ad01_sub
        display flex
        img
          width: 50%;
          height: 100%;
</style>
