<template>
  <div class="Header">
    <div class="rootHeader" :class="showHeader == true ? 'isFixed' : ''">
      <div class="Header-Inside">
        <router-link to="/" class="toHome"
          ><img
            src="../../assets/header/HeaderImg/logo.png"
            alt=""
            class="Header-WebLogo"
        /></router-link>
        <ul class="Header-LeftBar">
          <router-link to="/"><li>发现</li></router-link>
          <router-link to="/channel"
            ><li @mouseenter="isShow = true">
              频道<i class="iconfont icon-xia"></i></li
          ></router-link>
          <router-link to="/my"><li>我的</li></router-link>
        </ul>
        <form action="" class="Header-Search">
          <input
            type="text"
            class="Header-Search-Input"
            placeholder="专辑/声音/用户"
          />
          <span class="Header-Search-Submit"
            ><i class="iconfont icon-sousuo"></i
          ></span>
        </form>
        <div class="Header-RightBar">
          <div class="Header-RightBar-Btn">
            <i class="iconfont icon-shangchuan"></i>
            <span>上传</span>
          </div>
          <div class="Header-RightBar-Btn">
            <i class="iconfont icon-chuangzuozhezhongxin"></i>
            <span>创作中心</span>
          </div>
          <div class="Header-RightBar-Btn">
            <i class="iconfont icon-youshengyin"></i>
            <span>有声出版</span>
          </div>
          <div class="Header-RightBar-Btn">
            <i class="iconfont icon--kehuduan"></i>
            <span>客户端</span>
          </div>
          <div class="Header-RightBar-Btn" style="margin-left: 20px">
            <router-link to="/signin">
              <img
              src="../../assets/header/HeaderImg/UserLogo.png"
              alt=""
              class="Header-RightBar-UserImg"
              />
            </router-link>
          </div>
        </div>
        <transition>
          <div class="channel" v-show="isShow" @mouseleave="isShow = false">
            <div
              class="channel-handle"
              v-for="(item, index) in Allchannels.data.groups"
              :key="index"
            >
              <router-link to="/channel" >{{
                `${item.name} (${item.channelCount})`
              }}</router-link>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { EncyClopedia } from '../../api/audioli'
export default {
  name: 'Header',
  data() {
    return {
      i: 0,
      isShow: false,
      showHeader: false,
      Allchannels: {}
    }
  },
  methods: {
    //有个BUG,页面弹跳.
    handleScroll() {
      // 页面滚动距顶部距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      var scroll = scrollTop - this.i //之前的距离
      this.i = scrollTop //保存当前的距离
      if (scroll < 0) {
        //之前的距离减去当前的距离为负值
        // console.log('up')
        this.showHeader = true //显示header 通过添加动态类名showHeader
      } else {
        //  console.log('down')
        this.showHeader = false //隐藏header 通过添加动态类名showHeader
      }
    }
  },
  async mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
    // 监听（绑定）滚轮 滚动事件
    /*    window.removeEventListener('scroll', this.handleScroll, true) */
    const dia = await EncyClopedia()
    this.Allchannels = dia
     console.log(this.Allchannels);
    console.log(this.Allchannels.data.groups);
  }
}
</script>

<style lang="stylus" scoped>
.Header {
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 2px 0px #0000001a;
  color: white;
  margin-bottom: 10px;
  height: 60px;
  left: 0;
}

.Header-Inside {
  width: 1080px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  background-color: #fff;
}

.rootHeader {
  position: relative;
}

.isFixed {
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0px 2px 2px 0px #0000001a;
  color: black;
}

.Header-Inside .toHome {
}

.Header-Inside .toHome .Header-WebLogo {
  width: 120px;
}

.Header-LeftBar {
  display: flex;
  width: 180px;
}

.Header-LeftBar li {
  cursor: pointer;
  text-align: center;
  width: 60px;
  height: 100%;
  font-size: 16px;
  color: #72727b;
}

.Header-LeftBar li i {
  transform: rotate(135deg);
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
}

.Header-LeftBar li:hover {
  color: #f86442;
}

.Header .Header-Inside .channel {
  display: flex;
  top: 60px;
  position: absolute;
  width: 100%;
  height: 151px;
  min-height: 150px;
  background: #fbfbfc;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
  text-align: center;
  z-index: 2;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: 1s;
  overflow: hidden;
}

.Header .Header-Inside .channel:hover {
  transition: all 0.3s ease;
}

.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.v-enter-active, .v-leave-active {
  transition: all 0.4s ease;
}

/* v-move 和 v-leave-active 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果 */
.v-move {
  transition: all 0.6s ease;
}

.v-leave-active {
  position: absolute;
}

.Header .Header-Inside .channel .channel-handle {
  width: 110px;
  height: 21px;
  background: #ebebeb;
  margin-left: 20px;
  border-radius: 12px;
  font-size: 13px;
}

.Header-Search {
  position: relative;
  width: 340px;
  height: 40px;
}

.Header-Search .Header-Search-Input {
  font-size: 14px;
  box-sizing: border-box;
  list-style: none;
  padding: 10px 70px 10px 20px;
  width: 100%;
  height: 100%;
  color: #333;
  border: 1px solid #f86442;
  border-radius: 54px;
  outline: 0;
}

.Header-Search .Header-Search-Submit {
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgb(255, 134, 98);
  width: 60px;
  height: 40px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  border-radius: 0 54px 54px 0;
  cursor: pointer;
}

.Header-Search .Header-Search-Submit i {
  font-size: 25px;
}

.Header-RightBar {
  display: flex;
  width: 320px;
}

.Header-RightBar .Header-RightBar-Btn {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #72727b;
  width: 60px;
  justify-content: center;
  align-items: center;
}

.Header-RightBar .Header-RightBar-Btn:hover {
  color: #f86442;
}

.Header-RightBar .Header-RightBar-Btn .iconfont {
  font-size: 20px;
}

.Header-RightBar .Header-RightBar-Btn .Header-RightBar-UserImg {
  width: 37px;
  height: 37px;
  border-radius: 50%;
}
</style>
