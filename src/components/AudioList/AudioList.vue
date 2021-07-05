<template>
  <div class="Audio-Encyclopedia">
    <h3 class="title">小说</h3>
    <div
      class="audio"
      v-for="(item, index) in lis.channels"
      :key="item.channel.channelId"
    >
      <div class="Childrens-stories">
        <div class="stories">
          <img class="clear" :src="item.channel.coverPath" alt="" />
          <div class="gushi">
            <h3 class="Childrens">{{ item.channel.channelName }}</h3>
            <div class="qt">
              <span class="ospan">12.4晚更新</span>
              <span>1096.5晚节目</span>
            </div>
          </div>
        </div>
        <router-link class="link" to="">更多></router-link>
      </div>
      <div class="audioList">
        <div
          class="audioItem"
          v-for="(item, index) in item.recommendAlbums.slice(0,10)"
          :key="item.albumId"
        >
          <div class="img">
            <img class="cover" :src="`https://imagev2.xmcdn.com/` + item.albumCoverPath" alt="" />
            <img class="control" src="../../assets/images/stop.png" alt="" />
            <p>
              <img
                :src="`https://imagev2.xmcdn.com/` + item.albumCoverPath"
                alt=""
              />
              22.22亿
            </p>
          </div>
          <a class="audioName" href="javascript:;">{{ item.albumTitle }}</a>
          <a class="audioAuthor" href="javascript:;">{{
            item.albumUserNickName
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lis"],
  name: "AudioList",
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="stylus" scoped>
.audio
  margin-top 15px
  .Childrens-stories
      width 768px
      display flex
      justify-content space-between
      .link:hover
        color rgb(248, 100, 34)
      .stories
          display flex
          .clear
              width 64px
              height 64px

          .gushi
              .Childrens
                  margin 8px 0
                  font-weight bold

              .qt
                  color rgb(163, 163, 172)
                  .ospan
                      margin-right 10px
  .audioList
    width 100%
    margin-top 20px
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
            z-index 1
            p
              padding-right 20px
              z-index 1
              img
                width 18px
                height 15px
                z-index 1
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
                    background-image url(/images/erji.png)
                    background-size 18px 18px
                    background-repeat no-repeat
        .audioName:hover{
          color rgb(251, 124, 66)
        }
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
</style>
