<template>
  <div class="contListContainer">
    <div class="left">
      <div class="title">
        <h2>{{ cardObj.title }}</h2>
        <ul class="novelList">
          <li
            class="novelItem"
            v-for="(titleItem, index) in cardObj.hotWord.slice(0, 7)"
            :key="index"
          >
            {{ titleItem }}
          </li>
        </ul>
        <p>更多</p>
      </div>
      <div class="audioList">
        <div
          class="audioItem"
          v-for="listItem in cardObj.albumList"
          :key="listItem.albumId"
        >
          <div class="img">
            <img
              class="cover"
              :src="`https://imagev2.xmcdn.com/` + listItem.albumCoverPath"
              :alt="listItem.intro"
            />
            <img class="control" src="./images/stop.png" alt="" />
            <!-- <img class="control" src="./images/start.png" alt="" @click="changeStart"> -->
            <p>{{ (listItem.albumPlayCount / 100000000).toFixed(2) }}亿</p>
          </div>
          <a class="audioName" href="javascript:;">{{ listItem.albumTitle }}</a>
          <a class="audioAuthor" href="javascript:;">{{
            listItem.albumUserNickName
          }}</a>
        </div>
      </div>
    </div>
    <div class="right">
      <h2 class="title">{{ cardObj.rankTitle }}</h2>
      <div class="rankList" v-if="cardObj.soar.length > 0">
        <div
          class="qiansan"
          v-for="smallItem in cardObj.soar.slice(0, 3)"
          :key="smallItem.id"
        >
          <div class="img">
            <img
              class="cover"
              :src="`https://imagev2.xmcdn.com/` + smallItem.cover"
              alt=""
            />
            <img class="control" src="./images/stop.png" alt="" />
          </div>
          <div class="text">
            <p class="title">{{ smallItem.albumTitle }}</p>
            <p class="autor">{{ smallItem.anchorName }}</p>
          </div>
        </div>
        <div
          class="more"
          v-for="(noPicItem, index) in cardObj.soar.slice(3, 6)"
          :key="noPicItem.id"
        >
          <span>{{ index + 4 }}</span
          >{{ noPicItem.albumTitle }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContentList",
  props: ["cardObj"],
  data() {
    return {
      isPlay: false,
    };
  },
  mounted() {
    // console.log(this.cardObj);
  },
  methods: {},
};
</script>
<style lang="stylus" scoped>
.nowIs
    display none
.contListContainer
    height 500px
    .left
        width 800px
        float left
        .title
        vertical-align middle
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
            .novelList
                position relative
                left 25px
                top 24px
                .novelItem
                    float left
                    display inline-block
                    font-size 12px
                    color #666
                    &:hover
                        color #F86442
                        cursor pointer
                    &::after
                        content '|'
                        height 10px
                        width 1px
                        color #e8e8e8
                        position relative
                        padding 0 10px
                    &:last-child::after
                        content ''
            p
                float right
                margin 20px 40px
                &:hover
                    color #F86442
                    cursor pointer
        .audioList
            width 100%
            height 420px
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
                        bottom -57px
                        right -37px
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
        .title
            font-weight 350
            font-size 20px
            margin 20px 0
        .rankList
            .qiansan
                margin-bottom 20px
                display flex
                background-image url(./images/bgControl.png)
                background-repeat no-repeat
                background-size 90px 70px
                background-position 5px 5px
                &:hover>.img .control
                    width 30px
                    height 30px
                    left calc(50% - 15px)
                    top calc(50% - 15px)
                .img
                    width 80px
                    height 80px
                    position relative
                    display flex
                    justify-content center
                    align-items center
                    .cover
                        width 80px
                        height 80px
                        left 0
                        top 0
                    .control
                        position absolute
                        width 0
                        height 0
                        transition all .3s linear
                        left 50%
                        top 50%
                .text
                    position relative
                    .title
                        position absolute
                        font-weight bold
                        font-size 14px
                        white-space nowrap
                        overflow hidden
                        text-overflow ellipsis
                        width 140px
                        top -10px
                        left 25px
                        &:hover
                            color #F86442
                            cursor pointer
                    .autor
                        width 140px
                        position absolute
                        color #a3a3a3
                        top 30px
                        left 25px
            .more
                margin-bottom 20px
                font-weight bold
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                width 240px
                span
                    padding-right 20px
                    color #888
</style>
