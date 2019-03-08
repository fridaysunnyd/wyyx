<template>
<div id="wrap">
  <ul>
    <li>
      <i class="iconfont icon-wangyi"></i>
      <span>网易自营品牌</span>
    </li>
    <li>
      <i class="iconfont icon-baozhang"></i>
      <span>30天无忧退货</span>
    </li>
    <li>
      <i class="iconfont icon-rechange"></i>
      <span>48小时快速退款</span>
    </li>
  </ul>
</div>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #wrap
    box-sizing border-box
    width: 100%;
    height: .96rem;
    padding:0 .4rem;
    ul
      width 100%
      height 100%
      display flex
      justify-content space-around
      align-items center
      li
        font-size: .32rem;
        color $red

</style>
