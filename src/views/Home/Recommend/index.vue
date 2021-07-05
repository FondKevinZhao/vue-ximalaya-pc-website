<template>
  <div class="recommendContainer">
    <div class="left">
      <div class="title">
        <h2>猜你喜欢</h2>
        <p>换一批</p>
      </div>
      <div class="audioList">
        <div
          class="audioItem"
          v-for="item in guessYouLikeList.slice(0, 5)"
          :key="item.albumId"
        >
          <div class="img">
            <img
              class="cover"
              :src="`https:` + item.albumCoverPath"
              :alt="item.albumUserNickName"
            />
            <img class="control" src="./images/stop.png" alt="" />
            <p>{{ (item.albumPlayCount / 100000000).toFixed(2) }}亿</p>
          </div>
          <a class="audioName" href="javascript:;">{{ item.albumTitle }}</a>
          <a class="audioAuthor" href="javascript:;">{{
            item.albumUserNickName
          }}</a>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="top">
        <img src="./images/zanwei.png" alt="" />
        <p>登陆一下，让我了解你</p>
      </div>
      <router-link to="/signin">
        <p class="btn">登陆</p>
      </router-link>
      <div class="bottom">
        <div class="download">
          <p>下载客户端</p>
          <div class="terminal">
            <p class="iPhone">iPhone</p>
            <p class="Android">Android</p>
          </div>
        </div>
        <img class="code" src="./images/code.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import ajax from "@/api/request.js";
export default {
  name: "Recommend",
  data() {
    return {
      guessYouLikeList: [],
    };
  },
  async mounted() {
    let result = await ajax({
      method: "GET",
      url: "/revision/explore/guessYouLike",
    });

    this.guessYouLikeList = result.data.recommendInfoList;
  },
};
</script>
<style lang="stylus" scoped>
.recommendContainer
    height 290px
    .left
        width 800px
        float left
        .title
            height 66px
            h2
                float left
                font-weight 350
                &::before
                    content ''
                    display inline-block
                    position relative
                    width 5px
                    height 15px
                    background-color #F86442
                    left 0
                    top 0
                    border-radius 2px
                    margin-right 10px
            p
                float right
                margin 20px 40px
                &:hover
                    color #F86442
                    cursor pointer
                &::before
                    content ''
                    position relative
                    display inline-block
                    width 20px
                    height 20px
                    background-image url(./images/change.png)
                    background-size 20px 20px
                    background-repeat no-repeat
                    top 3px
                    margin-right 10px
        .audioList
            width 100%
            height 190px
            .audioItem
                display inline-block
                width 140px
                height 190px
                overflow hidden
                margin-right 20px
                .img
                    position relative
                    width 140px
                    height 140px
                    border-radius 10px
                    overflow hidden
                    display flex
                    align-items center
                    justify-content center
                    transition all .3s linear
                    &:hover
                        &>.control
                            width 50px
                            height 50px
                        &>.cover
                            transform scale(1.1)
                    .cover
                        position absolute
                        width 140px
                        height 140px
                        transition all .3s linear

                    .control
                        width 0
                        height 0
                        position absolute
                        transition all .3s linear
                    p
                        background-color #020302
                        float right
                        color white
                        position relative
                        bottom -60px
                        right -36px
                        font-size 12px
                        &::before
                            content ''
                            position relative
                            top 2px
                            display inline-block
                            height 18px
                            width 18px
                            background-image url(./images/erji.png)
                            background-size 18px 18px
                            background-repeat no-repeat
                .audioName
                    display inline-block
                    font-weight 700
                    width 100%
                    word-break break-all
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                    padding-top 10px
                .audioAuthor
                    color #777
                    &:hover
                        color #F96442
    .right
        width 260px
        float right
        padding-top 25px
        .top
            height 70px
            background-image url(./images/background.png)
            background-size 260px 70px
            background-repeat no-repeat
            display flex
            align-items center
            img
                width 46px
                height 46px
                border-radius 50%
                padding 10px
            p
               font-size 16px
               color #666
        .btn
            width 96px
            height 24px
            border-radius 12px
            background-color #FF886A
            text-align center
            line-height 24px
            margin 15px auto
            color white
            box-shadow 1px 5px 6px #FF886A
            &:hover
                background-color #FF9C7B
                cursor pointer
        .bottom
            width 260px
            margin-top 40px
            background-image url(./images/loginBg.png)
            background-repeat no-repeat
            .download
                float left
                width 190px
                p
                    font-size 16px
                    margin 10px auto
                .terminal
                    display flex
                    .iPhone
                        font-size 14px
                        width 67px
                        height 34px
                        text-align center
                        line-height 34px
                        font-weight bold
                        border-radius 6px
                        color white
                        background-color #67B9EB
                        margin 0 10px 0 0
                    .Android
                        font-size 14px
                        width 67px
                        height 34px
                        text-align center
                        line-height 34px
                        font-weight bold
                        border-radius 6px
                        color white
                        background-color #86D864
                        float left
                        margin 0 10px 0 0

            .code
                width 66px
                height 66px
</style>
