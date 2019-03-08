<template>
    <div id="wrap">
      <slot name="left"></slot>
      <slot name="center"></slot>
      <slot name="right"></slot>
    </div>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wrap
    display flex
    justify-content space-between
    align-items center
    padding: .21333rem .4rem;
</style>
