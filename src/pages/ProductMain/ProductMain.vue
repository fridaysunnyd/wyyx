<template>
    <div id="wrap">
      <div class="main001" v-if="+$route.params.id === 9" v-for="(item,index) in manual" :key="index">
        <div class="inner001" v-for="(topic,index) in item.topics" :key="index">
          <div v-if="topic.type === 0" class="type_1">
            <div class="userWrap">
              <div class="user">
                <img :src="topic.avatar" alt="">
                <span class="name">{{topic.nickname}}</span>
              </div>
            </div>
            <div class="title">
              {{topic.title}}
            </div>
            <img :src="topic.picUrl" alt="">
            <span class="look">{{topic.readCount}}</span>
          </div>
          <div v-if="topic.type !== 0" class="type_2">
            <div class="content">
              <div class="userWrap">
                <div class="user">
                  <img :src="topic.avatar" alt="">
                  <span class="name">{{topic.nickname}}</span>
                </div>
              </div>
              <div class="title">
                {{topic.title}}
              </div>
              <div class="des">{{topic.subTitle}}</div>
              <span class="look">{{topic.readCount}}</span>
            </div>
            <img :src="topic.picUrl" alt="">
          </div>
          <Splice />
        </div>
      </div>
      <div class="main002" v-if="+$route.params.id === 10">
        002
      </div>
      <div class="main003" v-if="+$route.params.id === 12">
        003
      </div>
      <div class="main004" v-if="+$route.params.id === 7">
        004
      </div>
      <div class="main005" v-if="+$route.params.id === 4">
        005
      </div>
      <div class="main006" v-if="+$route.params.id === 6">
        006
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Splice from '../../components/Splice/Splice.vue'
  export default {
    mounted(){
      this.$store.dispatch('getManual')
    },
    computed:{
      ...mapState({
        manual:state => state.shiWu.manual
      })
    },
    components:{
      Splice
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#wrap
  width 100%
  .main001
    .inner001
      .type_1
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        box-sizing: border-box;
        padding: .36rem .3rem;
        .userWrap
          width 100%
          .user
            display flex
            align-items center
            img
              width: .56rem;
              height: .56rem;
              overflow: hidden;
              border-radius: 50%;
              box-sizing: border-box;
              border: .01rem solid #d9d9d9;
              margin-right: .2rem;
            span
              font-size: .28rem;
              color: #333;
              line-height: .36rem;
              white-space: nowrap;
        .title
          font-size: .36rem;
          color: #333;
          line-height: .52rem;
          margin: -.08rem 0 .16rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          font-family: PingFangSC-Regular;
        img
          width 100%
          height 100%
        .look
          font-size: .22rem;
          color: #999;
          line-height: .32rem;

      .type_2
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        box-sizing: border-box;
        padding: .36rem .3rem;
        display flex
        justify-content space-between
        .content
          display: flex
          flex-direction column
          justify-content space-between
          .userWrap
            width 100%
            .user
              display flex
              align-items center
              img
                width: .56rem;
                height: .56rem;
                overflow: hidden;
                border-radius: 50%;
                box-sizing: border-box;
                border: .01rem solid #d9d9d9;
                margin-right: .2rem;
              span
                font-size: .28rem;
                color: #333;
                line-height: .36rem;
                white-space: nowrap;
          .title
            font-size: .36rem;
            color: #333;
            line-height: .52rem;
            margin: -.08rem 0 .16rem 0;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: PingFangSC-Regular;
          .des
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .28rem;
            line-height: .4rem;
            padding-top: .08rem;
            color: #7f7f7f;
          .look
            font-size: .22rem;
            color: #999;
            line-height: .32rem;

        img
          width: 2.72rem;
          height: 2.72rem;
          border-radius: .08rem;
</style>
