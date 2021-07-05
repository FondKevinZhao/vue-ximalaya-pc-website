<template>
  <el-card>
    <div class="Rank">
      <div class="RankingList">
        <div class="Leaderboard">
          <router-link class="oa" to="/">首页</router-link>
          <span class="ospan">></span>
          <span class="PaiHangBang">排行榜</span>
        </div>
        <div class="rank-tab-var">
          <ul class="rank-ul" @click="handelClick" ref="AAA">
            <li id="renqi"  :class="as === 0 ? 'active rank-li' : 'rank-li'">
              <router-link to="">人气精选</router-link>
            </li>
            <li id="rebo" :class="as === 1 ? 'active rank-li' : 'rank-li'">
              <router-link to="">热播榜</router-link>
            </li>
            <li id="xinpin" :class="as === 2 ? 'active rank-li' : 'rank-li'">
              <router-link to="">新品榜</router-link>
            </li>
            <li :class="as === 3 ? 'active rank-li' : 'rank-li'">
              <router-link to="">畅销榜</router-link>
            </li>
            <li :class="as === 4 ? 'active rank-li' : 'rank-li'">
              <router-link to="">口碑榜</router-link>
            </li>
            <li :class="as === 5 ? 'active rank-li' : 'rank-li'">
              <router-link to="">主播势力榜</router-link>
            </li>
            <li :class="as === 6 ? 'active rank-li' : 'rank-li'">
              <router-link to="">影视原著榜</router-link>
            </li>
          </ul>
          <div class="rank-div"></div>
        </div>
        <div class="Hit">
          <!-- 热播榜 -->
          <div
            class="Hit-List"
            v-for="(item, index) in hitlist.rankList"
            :key="item.rankId"
          >
            <div class="sub-title">
              <span>{{ item.title }}</span>
            </div>
            <ul class="list-ul">
              <li class="list-li">
                <div class="li-div">
                  <router-link to=""
                    ><img
                      :src="'https://imagev2.xmcdn.com/' + item.albums[0].cover"
                      alt=""
                  /></router-link>
                </div>
                <div class="contentCa">
                  <div class="contentCa-title">
                    <router-link to="">{{
                      item.albums[0].albumTitle
                    }}</router-link>
                  </div>
                  <div class="Playback-times">
                    <div class="times">
                      <img src="../../assets/images/erji.png" alt="" /> 19.78亿
                    </div>
                    <div class="anchor">{{ item.albums[0].anchorName }}</div>
                  </div>
                </div>
              </li>
              <li class="item-link" v-for="title in item.albums.slice(1, 11)">
                <div class="lianjie-link">
                  <router-link to=""
                    ><span>{{ title.albumTitle }}</span></router-link
                  >
                </div>
                <!-- 播放次数 -->
                <div class="Playback-item">
                  <img src="../../assets/images/耳机.png" alt="" />
                  <span>5.25亿</span>
                </div>
              </li>
              <li class="item-link">
                <div class="lianjie-link">
                  <router-link to=""
                    ><span>米小圈上学记：一二三年级</span></router-link
                  >
                </div>
                <!-- 播放次数 -->
                <div class="Playback-item">
                  <img src="../../assets/images/耳机.png" alt="" />
                  <span>38.25亿</span>
                </div>
              </li>
              <li class="item-link">
                <div class="lianjie-link">
                  <router-link to=""
                    ><span>都市奇门医圣（果维福利免费版）</span></router-link
                  >
                </div>
                <!-- 播放次数 -->
                <div class="Playback-item">
                  <img src="../../assets/images/耳机.png" alt="" />
                  <span>20.25亿</span>
                </div>
              </li>
              <li class="item-link">
                <div class="lianjie-link">
                  <router-link to=""
                    ><span>白眉大侠 | 单田芳（400回完）</span></router-link
                  >
                </div>
                <!-- 播放次数 -->
                <div class="Playback-item">
                  <img src="../../assets/images/耳机.png" alt="" />
                  <span>70.25亿</span>
                </div>
              </li>
              <li class="item-link">
                <div class="lianjie-link">
                  <router-link to=""
                    ><span>摸金天师（紫襟演播）</span></router-link
                  >
                </div>
                <!-- 播放次数 -->
                <div class="Playback-item">
                  <img src="../../assets/images/耳机.png" alt="" />
                  <span>70.25亿</span>
                </div>
              </li>
              <li class="item-link">
                <div class="lianjie-link">
                  <router-link to=""
                    ><span
                      >德云社相声精选集（365天高清伴睡版）</span
                    ></router-link
                  >
                </div>
                <!-- 播放次数 -->
                <div class="Playback-item">
                  <img src="../../assets/images/耳机.png" alt="" />
                  <span>38.25亿</span>
                </div>
              </li>
              <li class="item-link">
                <div class="lianjie-link">
                  <router-link to=""
                    ><span>米小圈上学记：一二三年级</span></router-link
                  >
                </div>
                <!-- 播放次数 -->
                <div class="Playback-item">
                  <img src="../../assets/images/耳机.png" alt="" />
                  <span>38.25亿</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "RankingList",
  data() {
    return {
      distance: 0,
      as: 0,
      isActive: false,
    };
  },
  methods: {
    ...mapActions(["Rankin"]),
    handelClick(e) {
      console.log(e);
    },
  },
  mounted() {
    this.Rankin();
  },
  computed: {
    ...mapState({
      hitlist: (state) => state.rankingList.hitlist,
    }),
  },
};
</script>

<style lang="stylus" scoped>
.Rank
    width 100%
    .RankingList
        width 1080px
        margin 0 auto
        a:hover
            color rgb(248, 100, 34)
        .Leaderboard
            margin 20px 0
            font-size 13px
            color rgb(114, 114, 123)
            a:hover{
                color rgb(248, 100, 34)
            }
            .oa
                color rgb(114, 114, 123)
            .ospan
                margin 0 3px
        .rank-tab-var
            position relative
            .rank-ul
                display flex
                justify-content center
                padding-bottom 10px
                position relative
                border-bottom 1px solid rgb(232, 232, 232)

                .rank-li
                    width 100px
                    font-size 14px
                    text-align center
                    a
                        width 100%
                .active
                    font-size 17px
            .rank-div
                position absolute
                left 225px
                bottom 0
                width 30px
                border 1px solid rgb(248, 100, 66)
  .Hit
    display flex
    flex-wrap wrap
    .Hit-List
      width 330px
      margin 20px 30px 0 0
      .sub-title
        height 24px
        line-height 24px
        font-size 22px
        margin-bottom 20px
        span
          background rgb(250, 210, 145)
      .list-ul
        .list-li
          display flex
          .li-div
            margin-bottom 20px
            img
              width 80px
              height 80px
          .contentCa
            width 210px
            height 80px
            margin-left 20px
            .contentCa-title
              width 210px
              height 44px
              margin-bottom 16px
              a:hover
                color rgb(248, 100, 66)
              a
                font-size 16px
            .Playback-times
              display flex
              vertical-align middle
              .times
                width 69px
                height 19px
                line-height 19px
                background rgb(7, 7, 7)
                color white
                img
                  width 14px
                  height 14px
              .anchor
                font-size 14px
                color rgb(163, 163, 172)
        .item-link
          width 340px
          height 40px
          margin-bottom 10px
          display flex
          justify-content space-between
          .lianjie-link
            width 210px
            height 40px
            span
              color rgb(110, 110, 110)
            a
              font-size 14px
              span:hover
                color rgb(248, 100, 66)
          .Playback-item
            width 70px
            height 14px
            font-size 12px
            text-align center
            img
              width 18px
              height 15px
              background rgb(255, 255, 255)
            span
              color rgb(195, 172, 172)
</style>
