<template>
  <div class="toTopContainer">
    <div class="inner">
      <div class="logoImg">
        <img src="./images/logos.png" alt="" />
      </div>
      <p class="text">听书、听课、听段子 6亿用户的选择！</p>
      <a href="//www.ximalaya.com/down/lite?client=win">
        <p class="btn">下载客户端</p>
      </a>
    </div>
    <div class="outer">
      <p class="iconfont icon-huidaodingbu"><a href="#"></a></p>
      <a href="https://m.ximalaya.com/cs-bridge-web/page/contact-cs?appId=30">
        <p class="iconfont icon-fankui"></p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToTop",
};
</script>
<style lang="stylus" scoped> 
.toTopContainer
    position fixed
    right 10px
    top 310px
    width 170px
    height 210px
    border-radius 12px
    box-shadow 0 0 12px 0 #ddd
    .inner
        width 100%
        height 100%
        display flex
        flex-direction column
        align-items center
        justify-content space-around
        background-color #fff
        .logoImg
            img
                width 60px
                height 60px
        .text
            padding 0 20px
            text-align center
            color #666
        .btn
            color white
            background-color #FC3813
            padding 5px 20px
            border-radius 14px
            cursor pointer
    .outer
        position fixed
        right 75px
        .iconfont
            &:hover
                color #FC5832
        .icon-huidaodingbu
            font-size 26px
            bottom 250px
            background-color #eee
            color #888
            cursor pointer
            padding 5px
            margin-top 20px
            a
                position absolute
                display inline-block
                width 100%
                height 32px
                left 0
        .icon-fankui
            font-size 26px
            bottom 200px
            background-color #eee
            padding 5px
            color #888
            margin-top 20px
            cursor pointer
</style>
