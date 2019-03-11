<template>
    <div id="wrap">
      <div class="sub" v-if="subMenu">
        <div class="banner">
          <img :src="subMenu.bannerUrl" alt="">
        </div>
        <div class="menu">
          <div class="item" v-for="(item,index) in subMenu.subCateList" :key="index">
            <img :src="item.wapBannerUrl" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        classifyInfo:state => state.cate.classifyInfo
      }),
      subMenu(){
        return this.classifyInfo.find(item => item.id === +this.$route.params.id)
      }
    },
    mounted(){
      this.$store.dispatch('getClassifyInfo',()=>{
        this.$nextTick(()=>{
          new BScroll('#wrap',{
            click:true,
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
#wrap
  width 7.84rem
  height 15rem
  float right
  box-sizing border-box
  padding: .4rem .4rem .28rem;
  .sub
    .banner
      img
        width: auto
        height: 2.56rem;
        margin-bottom: .42667rem;
    .menu
      clearFix()
      .item
          float left
          margin-right: .45333rem;
          width: 1.92rem;
          text-align: center;
          img
            width: 1.92rem;
            height: 1.92rem;
          span
            height: .96rem;
            font-size: .32rem;
            color: #333;
            text-align: center;
            line-height: .48rem;
          &:nth-child(3n)
            margin-right 0

</style>
