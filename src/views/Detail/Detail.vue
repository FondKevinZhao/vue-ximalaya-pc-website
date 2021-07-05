<template>
  <div class="detailContainer">
    <div class="detailContainerNav">
      <div class="detailContainerNavHeader">
        <!-- nav导航-->
        <span class="navItem">
          <a href="">首页</a>
          <span class="navItemSpan"> > </span>
        </span>
        <span class="navItem">
          <a href="">有声书</a>
          <span class="navItemSpan"> > </span>
        </span>
        <span class="navItem">
          <a href="">{{ info.albumPageMainInfo.albumTitle }}</a>
        </span>
      </div>
      <!--书本介绍-->
      <div class="content">
        <div class="content-header">
          <img class="contentImg1" :src="info.albumPageMainInfo.cover" alt="" />
          <img src="../../assets/images/cover-right_dd0ab25.png" alt="" />
          <div class="content-header-right">
            <span class="bookState">完本</span>
            <h1 class="author-reader">
              {{ info.albumPageMainInfo.albumTitle }}
            </h1>
            <div class="VaVa">
              <div class="star">
                <i class="iconfont icon-pingfen1"></i>
                <i class="iconfont icon-pingfen1"></i>
                <i class="iconfont icon-pingfen1"></i>
                <i class="iconfont icon-pingfen1"></i>
                <i class="iconfont icon-xing3"></i>
                <span class="pingfen">9.4分</span>
              </div>
              <span class="listenCount">
                <i class="iconfont icon-youshengshufengmianbiaozhi"></i>
                70.66亿
              </span>
            </div>

            <div class="bookStyle">
              <span class="bookStyleItem">{{
                signList.category.categoryTitle
              }}</span>
              <span v-for="item in signList.channels" :key="item.channelName">
                <span class="bookStyleItem">{{ item.channelName }}</span>
              </span>
            </div>
            <div class="bookControl">
              <i class="iconfont icon-bofang"></i>
              <div class="bookHandle">
                <button>
                  <i class="iconfont icon-xiazai bookHandleItem">下载</i>
                </button>
                <button>
                  <i class="iconfont icon-star bookHandleItem">订阅</i>
                </button>
                <button>
                  <i class="iconfont icon-fenxiang bookHandleItem">订阅</i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="synopsis">
          <p class="newbook">
            <a href="">2020紫襟盗墓新作：盗墓手札。戳这里去听~</a>
          </p>
          <br />
          <p>【内容简介】</p>
          <p>
            二十岁那年我因为贪财收了一件不该收的古董，从那以后，为了活命，我不得不一次次出入那些对于活人来说十死无生的禁地。秦岭大山里的墓葬群，西北戈壁中的无人区，浩瀚深海下的失落遗迹，雪域高原上的死亡禁区……
          </p>
          <br />
          <p>【作者/主播简介】</p>
          <p><b>作者</b>:风尘散人，网络小说作家，代表作《摸金天师》</p>
          <p>
            <b>主播</b
            >:有声的紫襟，喜马拉雅FM超人气王牌主播，声音磁性，演播方式多变，擅长恐怖悬疑类小说，在喜马拉雅已获得400万粉丝，长期霸榜全球华语博客巅峰榜，代表作《藏地密码》《摸金天师》。
          </p>
        </div>
        <!-- 章节列表-->
        <div class="section">
          <div class="head">
            <span class="voice"
              >声音<span class="voiceCount">（1133）</span></span
            >
            <span class="evaluate"
              >评价<span class="evaluateCount">(1W+)</span></span
            >
            <div class="order">
              <a href="" class="active">正序</a>|
              <a href="">逆序</a>
            </div>
          </div>
          <div class="soundList">
            <ul v-for="item in chapterList.tracks" :key="item.title">
              <li class="soundListItem">
                <span class="orderIndex">{{ item.index }}</span>
                <div class="textTitle">
                  <a href="">{{ item.title }}</a>
                </div>
                <div class="CountAndYear">
                  <span class="count">
                    <i class="iconfont icon-youshengshufengmianbiaozhi"
                      >{{ (item.playCount / 1000).toFixed(1) }}万</i
                    >
                  </span>
                  <span class="year">{{ item.createDateFormat }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="detailLeft">
      <div class="person">
        <i class="iconfont icon-icon_personal_Solidcolor_red"></i>专辑主播
      </div>
      <div class="personIntro">
        <div class="personDetail">
          <img class="headPortrait" :src="readerInfo.cover" alt="" />
          <span class="introName">{{ readerInfo.nickName }}</span>
          <i class="iconfont icon-V"></i>
          <i class="iconfont icon-16"></i>
        </div>
        <div class="allCount">
          <span class="allCountItem"
            ><i class="iconfont icon-pinshuai"></i>&nbsp;{{
              (readerInfo.tracksCount / 10000).toFixed(1)
            }}万</span
          >
          <span class="allCountItem"
            ><i class="iconfont icon-tongxinyuan"></i>&nbsp;{{
              readerInfo.albumsCount
            }}</span
          >
          <span class="allCountItem"
            ><i class="iconfont icon-weibiaoti--"></i>&nbsp;{{
              (readerInfo.fansCount / 10000).toFixed(1)
            }}万</span
          >
        </div>
        <p class="authorIntro">
          {{ readerInfo.personalSignature }}
        </p>
      </div>
      <div class="album">
        <div class="albumHeader">
          <i class="iconfont icon-zuanshi"></i>TA的专辑
          <span class="getMore">更多</span>
        </div>
        <ul
          class="albumList"
          v-for="item in albumList.albumList"
          :key="item.id"
        >
          <li class="albumListItem">
            <img class="ItemImg" :src="item.coverPath" alt="" />
            <div class="imgLeft">
              <span class="imgIntro">{{ item.title }}</span>
              <span class="iconfont icon-erji tingCount"
                >{{ (item.playCount / 100000000).toFixed(2) }}亿</span
              >
            </div>
          </li>
        </ul>
      </div>
      <br />
      <div class="hotSearch">
        <div class="person" v-if="hotSearchList.recKw">
          <i class="iconfont icon-huo"></i>相关搜索
        </div>
        <span
          class="searchType"
          v-for="(item, index) in hotSearchList.recKw.recommendText.slice(
            0,
            10
          )"
          :key="index"
        >
          <span class="searchWord">{{ item }}</span>
        </span>
      </div>
      <br />
      <img
        class="changting"
        src="../../assets\images\default-ad_a4a9be6.jpg"
        alt=""
      />

      <div class="album">
        <div class="albumHeader">
          <i class="iconfont icon-zuanshi"></i>相关推荐
          <span class="getMore iconfont icon-huanyipi">换一批</span>
        </div>
        <ul
          class="albumList"
          v-for="item in recommendList.hotWordAlbums.slice(0, 10)"
          :key="item.id"
        >
          <li class="albumListItem">
            <img
              class="ItemImg"
              src="../../assets\images\CMCoOSIEKcyOABEA4wCUHS38.webp"
              alt=""
            />
            <div class="imgLeft">
              <span class="imgIntro">{{ item.title }}</span>
              <span class="tingCount">{{ item.nickname }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Detail",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      info: (state) => state.detail.info,
      signList: (state) => state.sign.signList,
      chapterList: (state) => state.chapter.chapterList,
      recommendList: (state) => state.recommend.recommendList,
      hotSearchList: (state) => state.hotSearch.hotSearchList,
      albumList: (state) => state.album.albumList,
      readerInfo: (state) => state.reader.readerInfo,
    }),
  },
  methods: {
    ...mapActions("detail", ["getBaseInfo"]),
    ...mapActions("sign", ["getSign"]),
    ...mapActions("chapter", ["getChapterList"]),
    ...mapActions("recommend", ["getRecommendList"]),
    ...mapActions("hotSearch", ["getHotSearchList"]),
    ...mapActions("album", ["getAlbumList"]),
    ...mapActions("reader", ["getReaderInfo"]),
  },
  async created() {
    await this.getBaseInfo();
  },
  mounted() {
    this.getSign();
    this.getChapterList();
    this.getRecommendList();
    this.getHotSearchList();
    this.getAlbumList();
    this.getReaderInfo();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.detailContainer {
  position: relative;
  width: 1080px;
  margin: 0 auto;
}
.detailContainerNav {
  margin: 20px auto;
  width: 1080px;
  height: 26px;
  font-size: 12px;
  color: #72727b;
}
.detailContainerNavHeader {
  font-size: 12px;
  line-height: 1.4;
  display: flex;
}
.navItem a {
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  color: #72727b;
}
.content {
  width: 780px;
  height: 624px;
  padding: 40px 40px 20px;
}
.content .content-header {
  display: flex;
  position: relative;
  padding-bottom: 40px;
}
.content-header .contentImg1 {
  width: 187px;
}
.content-header-right {
  height: 172px;
  width: 520px;
  position: absolute;
  right: 0px;
}
.bookState {
  display: inline-block;
  background-color: #7abf27;
  color: white;
  border-radius: 20%;
  width: 40px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.author-reader {
  margin-left: 5px;
  display: inline-block;
  font-size: 20px;
  color: #333;
  height: 32px;
  line-height: 32px;
}
.VaVa {
  margin: 12px 0 10px 0;
  display: flex;
}
.star {
  color: #f5a623;
}
.pingfen {
  margin-left: 8px;
}
.listenCount {
  color: #666666;
  font-size: 14px;
  padding-left: 15px;
}
.bookStyle {
  width: 520px;
  height: 34px;
  color: #72727b;
  font-size: 14px;
}
.bookStyleItem {
  background-color: #f9f9fa;
  margin: 0 10px 10px 0;
  padding: 2px 10px;
}
.bookControl {
  display: flex;
  position: relative;
  width: 520px;
  height: 50px;
  margin: 13px 0 0;
}
.icon-bofang {
  font-size: 50px;
  color: #ff805d;
}
.bookHandle {
  display: inline-block;
  position: absolute;
  right: 0px;
  line-height: 50px;
}
.bookHandle button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 15px;
}
.bookHandleItem {
  display: inline-block;
  height: 35px;
  line-height: 35px;
  width: 80px;
  font-size: 14px;
  color: #f86442;
  border-radius: 18px;
  background-color: rgba(254, 121, 89, 0.1);
}
.synopsis {
  padding: 20px 0 0;
  border-top: 1px solid #e8e8e8;
}
.synopsis .newbook {
  margin: 10px 0;
  font-size: 17px;
  line-height: 30px;
  margin: 10px 0px;
  font-weight: 900;
}
.synopsis .newbook a {
  color: #4990e2;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
}
.synopsis p {
  color: #333;
  font-size: 16px;
  line-height: 30px;
}
.section {
  margin: 40px 0 0 0;
}
.section .head {
  position: relative;
  display: flex;
  height: 60px;
  line-height: 60px;
}
.head .voice {
  color: #40404c;
  margin: 4px 10px 0 0;
  font-size: 20px;
}
.head .voice .voiceCount {
  color: #a3a3ac;
}
.head .evaluate {
  color: #a3a3ac;
  margin: 4px 10px 0 0;
  font-size: 20px;
}
.head .order {
  position: absolute;
  right: 0px;
  height: 60px;
  line-height: 60px;
}
.order a {
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  font-size: 14px;
  color: #72727b;
}
.order .active {
  color: #f86442;
}
.soundList ul {
  list-style: none;
  display: block;
}
.soundList ul .soundListItem {
  position: relative;
  display: flex;
  height: 23px;
  line-height: 23px;
  padding: 10px 0;
  border-top: 1px solid #e8e8e8;
  font-size: 14px;
}
.soundListItem .orderIndex {
  color: #a3a3ac;
  font-size: 14px;
  padding: 0 15px;
  cursor: pointer;
  width: 20px;
  text-align: center;
}
.soundListItem .textTitle {
  font-size: 14px;
  padding-left: 8px;
}
.soundListItem .textTitle a {
  color: #40404c;
  text-decoration: none;
}
.soundListItem .CountAndYear {
  position: absolute;
  right: 0px;
  color: #a3a3ac;
}
.soundListItem .CountAndYear .count .iconfont {
  font-size: 14px;
}
.soundListItem .CountAndYear .year {
  margin-left: 50px;
  color: #a3a3ac;
}
.detailLeft {
  height: 2046px;
  width: 220px;
  position: absolute;
  right: 0px;
}
.detailLeft .person {
  padding: 10px 0;
  font-size: 16px;
  color: #40404c;
  border-bottom: 1px solid #e8e8e8;
}
.detailLeft .person .iconfont {
  color: #fbc57c;
  padding: 0 10px;
}
.personDetail {
  display: flex;
  margin: 10px 0 0;
  height: 40px;
}
.personDetail .headPortrait {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.personDetail .introName {
  line-height: 40px;
  color: #40404c;
  font-size: 14px;
  margin-left: 12px;
}
.personDetail .iconfont {
  line-height: 40px;
  margin: 0 4px;
  color: #ff805d;
}
.personDetail .icon-16 {
  font-size: 32px;
}
.allCount {
  margin: 10px 0;
  color: #40404c;
  font-size: 14px;
}
.allCount .allCountItem {
  padding-right: 12px;
}
.authorIntro {
  color: #a3a3ac;
  font-size: 12px;
  margin: 0 0 10px;
}
.album .albumHeader {
  border-bottom: 1px solid #e8e8e8;
  padding: 10px 0;
  color: #40404c;
}
.album .getMore {
  float: right;
  cursor: pointer;
}
.album .getMore:hover {
  color: #f5a623;
}
.album .icon-zuanshi {
  color: #70befe;
  padding: 0 10px;
}
.albumList .albumListItem {
  display: flex;
  list-style: none;
  padding: 10px 0;
  border-bottom: 1px dashed #e8e8e8;
}
.albumListItem .ItemImg {
  height: 60px;
  width: 60px;
}
.albumListItem .imgLeft {
  margin-left: 10px;
}
.albumListItem .imgLeft .imgIntro {
  font-size: 14px;
  color: #40404c;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.albumListItem .tingCount {
  font-size: 12px;
  color: #a3a3ac;
}
.hotSearch .person {
  padding: 10px 0;
}
.hotSearch .person iconfont {
  color: #f5725c;
}
.searchType {
  margin: 20px 0 0;
}
.searchType .searchWord {
  display: inline-block;
  line-height: 24px;
  padding: 0 10px;
  margin-bottom: 20px;
  margin-right: 10px;
  background: #f3f4f5;
  border-radius: 4px;
  font-size: 14px;
  color: #40404c;
}
.changting {
  margin: 8px;
}
</style>
