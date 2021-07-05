<template>
  <div class="flex-abox">
    <span class="iconfont icon-qie span1"></span>
    <span class="iconfont icon-wechat"></span>
    <span class="iconfont icon-wb"></span>
  </div>
</template>

<script>
export default {
  name: "Qqweixinweibo",
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped> 


.flex-abox
    display flex
    justify-content space-around
    span
        font-size 40px
        color pink
        padding 10px
        background rgba(76, 66, 101,0.7)
        border-radius 50%
</style>
