<template>
  <div class="naavContainer">
    <div class="left">
      <router-link to="/category">
        <div class="category">
          <img src="./images/category.png" alt="12345" />
          <p>分类</p>
        </div>
      </router-link>
      <router-link to="/channel">
        <div class="pingdao">
          <img src="./images/pingdao.png" alt="" />
          <p>频道</p>
      </div>
      </router-link>
      <router-link to="/rankingList">
        <div class="ranking">
          <img src="./images/ranking.png" alt="" />
          <p>排行榜</p>
      </div>
      </router-link>
      
      
      
    </div>
    <div class="right">
      <div class="item">
        <div class="xiaoshuo" v-for="item in navList" :key="item.groupId">
          <a href="javascript:;">{{ item.groupName }}</a>
          <a
            href="javascript:;"
            v-for="smallItem in item.channels"
            :key="smallItem.channelId"
            >{{ smallItem.channelName }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ajax from "@/api/request.js";
export default {
  name: "Nav",
  data() {
    return {
      navList: [],
    };
  },
  async mounted() {
    let navObj = await ajax({
      method: "GET",
      url: "/revision/metadata/v2/recommend/line",
    });

    this.navList = navObj.data.groups;
  },
};
</script>
<style lang="stylus" scoped>
.naavContainer
    width: 1080px;
    height 100px
    .left
        float left
        padding-top 10px
        div
            display inline-block
            width 80px
            margin 0 auto
            text-align center
            &::after
                content ''
                display inline-block
                height 16px
                width 2px
                background-color #e8e8e8
                position relative
                top -25px
                right -40px
            img
                width 18px
                height 18px
            p
                text-align center
                margin-top 0
                &:hover
                    color #F86442
                    cursor pointer
    .right
        .item
            float left
            width 840px
            padding-left 20px
            box-sizing border-box
            div
                width 205px
                padding 6px 0
                float left
                a
                    &:hover
                        color #F86442
                    text-decoration none
                    display inline-block
                    width 68px
                    color #777
                    padding-left 12px
                    &:first-child
                        color #333
                        &:hover
                            color #F86442
                        &::after
                            content ''
                            display inline-block
                            width 2px
                            height 10px
                            background-color #FC5832
                            margin 0 10px
</style>
