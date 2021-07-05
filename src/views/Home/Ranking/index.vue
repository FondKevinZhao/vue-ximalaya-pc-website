<template>
  <div class="rankingContainer">
    <div class="left">
      <ol class="rankNameList">
        <li
          class="rankNameItem"
          v-for="item in albumRankPageList"
          :key="item.id"
        >
          <div class="itemTitle">
            {{ item.rankResult.title }}
          </div>
          <div class="rankList">
            <div
              class="qiansan"
              v-for="qiansanItem in item.albums.slice(0, 3)"
              :key="qiansanItem.id"
            >
              <div class="img">
                <img
                  class="cover"
                  :src="`https://imagev2.xmcdn.com/` + qiansanItem.cover"
                  :alt="qiansanItem.albumTitle"
                />
              </div>
              <div class="text">
                <p class="title">{{ qiansanItem.albumTitle }}</p>
                <p class="autor">{{ qiansanItem.anchorName }}</p>
              </div>
            </div>
            <div
              class="more"
              v-for="(noPicItem, index) in item.albums.slice(3)"
              :key="noPicItem.id"
            >
              <span>{{ index + 4 }}</span
              >{{ noPicItem.albumTitle }}
            </div>
          </div>
        </li>
      </ol>
    </div>
    <div class="right">
      <div class="title">
        听单推荐<span>更多</span><span class="iconfont icon-dayuhao"></span>
      </div>
      <div class="banner" v-if="laterList.length > 0">
        <img :src="`https:` + laterList[0].coverImgUrl" alt="" />
        <div class="recommend">{{ laterList[0].title }}</div>
        <div class="audioNum">
          <span class="iconfont icon-shengyin"></span>
          {{ laterList[0].dataCount }}首歌曲
        </div>
      </div>
      <ul class="audioList">
        <li
          class="audioItem"
          v-for="item in laterList.slice(1, 5)"
          :key="item.id"
        >
          <div class="img">
            <img :src="item.coverPathSmall" :alt="item.title" />
          </div>
          <div class="desc">
            <div class="smallTitle">{{ item.title }}</div>
            <div class="smallDesc">
              <span class="iconfont icon-shengyin"></span
              >{{ item.dataCount }}首声音
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ajax from "@/api/request.js";
export default {
  name: "Ranking",
  data() {
    return {
      albumRankPageList: [],
      laterList: [],
    };
  },
  async mounted() {
    let result = await ajax({
      method: "GET",
      url: "/revision/rank/v1/album/getRankAlbum?rankIds=47%2C70%2C100&pageNum=1&pageSize=10",
    });

    this.albumRankPageList = result.data.albumRankPageList;

    let result2 = await ajax({
      method: "GET",
      url: "/revision/subject/latestList?pageNum=1&pageSize=10",
    });

    this.laterList = result2.data.latestSubjects;
  },
};
</script>
<style lang="stylus" scoped>
.rankingContainer
    height 600px
    padding-bottom 30px
    .left
        float left
        clear both
        width 800px
        .rankNameList
            width 100%
            .rankNameItem
                width 33.33%
                float left
                .itemTitle
                    font-weight 350
                    font-size 20px
                    margin 28px 0
                    position relative
                    cursor pointer
                    display inline-block
                    padding 0 3px
                    &::after
                        content ''
                        display inline-block
                        width 40px
                        height 19px
                        background-image url(./images/all.png)
                        background-repeat no-repeat
                        background-size 35px 15px
                        position absolute
                        right -170px
                        top 5px
                        cursor pointer
                    &::before
                        content ''
                        display inline-block
                        width 100%
                        height 15px
                        position absolute
                        background-color #FF9D9D
                        top 11px
                        left 0
                        z-index -1
                .rankList
                    .qiansan
                        margin-bottom 20px
                        display flex
                        &:hover>.text .title
                            color #F86442
                            cursor pointer
                        .img
                            width 60px
                            height 60px
                            position relative
                            display flex
                            justify-content center
                            align-items center
                            .cover
                                width 60px
                                height 60px
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
                                font-size 14px
                                white-space nowrap
                                overflow hidden
                                text-overflow ellipsis
                                color #444
                                width 170px
                                left 15px
                            .autor
                                font-size 12px
                                width 170px
                                position absolute
                                color #a3a3a3
                                top 25px
                                left 15px
                    .more
                        margin-bottom 20px
                        white-space nowrap
                        overflow hidden
                        text-overflow ellipsis
                        width 240px
                        color #444
                        &:hover
                            color #F86442
                            cursor pointer
                        span
                            display inline-block
                            width 16px
                            padding-right 15px
                            color #888
    .right
        width 260px
        float right
        .title
            position relative
            font-size 18px
            padding 30px 0 20px
            span
                font-size 14px
                &:first-child
                    padding-left 130px
                &:hover
                    color #FC5832
                    cursor pointer
        .banner
            background-color #F5F6F7
            height 170px
            img
                width 260px
                height 125px
            .recommend
                color #40404c
                font-weight bold
                padding-left 10px
            .audioNum
                color #a3a3ac
                padding-left 10px
        .audioList
            .audioItem
                padding 10px 0
                cursor pointer
                height 60px
                &:hover > .desc > .smallTitle
                    color #FF9D9D
                .img
                    width 60px
                    height 60px
                    float left
                    margin-right 10px
                    img
                        width 60px
                        height 60px
                .desc
                    width 240px
                    margin-top 5px
                    .smallTitle
                        font-weight 600
                    .smallDesc
                        font-size 12px
                        .iconfont
                            padding 0 5px
                            font-size 12px
</style>
