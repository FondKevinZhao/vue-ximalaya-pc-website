<template>
  <div class="paginationContainer">
    <div class="pagItem active"><span>1</span></div>
    <div class="pagItem"><span>2</span></div>
    <div class="pagItem"><span>3</span></div>
    <div class="pagItem"><span>4</span></div>
    <div class="pagItem"><span class="iconfont icon-dayuhao"></span></div>
    <div class="pageIpt">
      <input type="text" name="" id="" placeholder="请输入页码" />
    </div>
    <div class="pageBtn"><button disabled class="disabled">跳转</button></div>
  </div>
</template>
<script>
export default {
  name: "Pagination",
};
</script>
<style lang="stylus" scoped>
.paginationContainer
  padding 30px 0
  width 100%
  font-size 14px
  color #a3a3ac
  display flex
  justify-content center
  align-items center
  .pagItem
    display flex
    align-items center
    justify-content center
    width 38px
    height 38px
    border 1px solid #ddd
    border-left none
    &:hover
      background-color #F86442
      color white
      cursor pointer
    &:first-child
      border 1px solid #ddd
  .pageIpt
    width 90px
    height 38px
    margin-left 20px
    input
      padding 0
      margin 0
      display inline-block
      width 100%
      height 100%
      outline none
      text-align center
      border 1px solid #ddd
      position relative
      top -1px
      color #666
        .placeholder
          color #eee
  .pageBtn
    width 66px
    height 40px
    button
      width 100%
      height 100%
      border 1px solid #ddd
      background-color #ccc
      color white

  .active
    background-color #F86442
    color white
  .disabled
    cursor not-allowed
</style>
