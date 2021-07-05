<template>
  <!-- 播放栏-->
  <div
    class="Player"
    :class="{
      Player: true,
      show: musicPlayerShow
    }"
  >
    <!-- 播放栏外层 -->
    <div class="Player-Outside">
      <!-- 播放栏内层 -->
      <div class="Player-container">
        <!-- audio播放器 -->
        <!--   <audio :src="playSongUrl" ref="audio"></audio> -->
        <audio :src="src" ref="audio"></audio>
        <!-- 歌曲Logo图片 -->
        <!--    <router-link to="" @click="showDetail"> -->
        <img
          class="musicImg"
          v-if="songList.length !== 0"
          src="../../assets/player/playerImg/bofang.png"
        />
        <img
          :src="currentSong.songImg"
          class="musicImg"
          v-else
        />
        <!-- </router-link> -->
        <!-- 播放控制器 -->
        <!-- 上一首 -->
        <div class="Player-Control">
          <i class="iconfont icon-houtui" @click="preSong"></i>
          <div class="Player-Control-Play" @click="playOrPause">
            <i v-show="!isPlay" class="iconfont icon-zanting"></i>
            <!-- 暂停/播放 -->
            <i v-show="isPlay" class="iconfont icon-arrow-"></i>
          </div>
          <i class="iconfont icon-qianjin" @click="nextSong"></i
          ><!-- @click="nextSong" -->
        </div>
        <!-- 歌曲信息: 歌曲进图条 歌曲名称 播放时间-->
        <div class="Player-ProgressBar">
          <div class="musicTitle" v-if="songList.length">
            <span class="musicName">喜马拉雅听歌</span>
          </div>
          <div class="progressBar-Playtime" v-else>
            00:00:00
            <span class="Playtime-Complete"> / 00:00:00 </span>
          </div>
          <div class="progressBar-PlaytimeReal">
            {{ songInfo.currentTime }} /
            <span class="Playtime-CompleteReal"></span>{{ songInfo.duration }}
          </div>
          <!-- 进度条 -->
          <div
            class="progressBar"
            ref="songProgress"
            @mousedown="moveProcessFn"
          >
            <!-- @mousedown="moveProgress"  -->
            <div class="progressBar-Load" ref="Load">
              <div class="progressBar-Current" ref="Current">
                <div class="progressBar-Btn" ref="Btn"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 播放栏 关注 下载 转发 -->
        <div class="Player-Focus">
          <div class="Player-Rate" @click="shouPlaybackRateFn" ref="playerRate">
            x&nbsp;1.0
          </div>
          <i class="iconfont icon-fuguanzhu"></i>
          <i class="iconfont icon-fuxiazai"></i>
          <i class="iconfont icon-fuzhuanfa"></i>
        </div>
        <!-- 播放栏 音量 循环 播放列表 -->
        <div class="Player-Set">
          <i class="iconfont icon-fuyinliang" @click="showPlayVolumeFn"></i>
          <i class="iconfont icon-xunhuan"></i>
          <i
            class="iconfont icon-bofangliebiao"
            ref="BtnPlayList"
            @click="showPlayListFn"
          ></i>
        </div>
        <!-- 播放列表 -->
        <div class="Player-List" ref="playList" v-show="showPlayList">
          <div class="Player-List-Top">
            <div class="List-Top-Left">播放列表({{ songList.length }})</div>
            <div class="List-Top-Right" @click="clearPlayList">清空列表</div>
            <!-- @click="clearPlayList" -->
          </div>
          <div class="Player-List-Content" ref="Content">
            <div
              class="Player-List-Item"
              v-for="(items, index) in currentSong.title"
              :key="index"
              @click="playThisSong(index)"
            >
              <div>{{ index + 1 }}</div>
              <div>data静态数据,可播放,可清空</div>
              <div @click="playThisSong">{{ items }}</div>
              <div>{{ '星期&nbsp;' + new Date().getDay() }}</div>
            </div>
          </div>
        </div>
        <!-- 倍速播放 -->
        <div class="Player-PlaybackRate" v-show="shouPlaybackRate">
          <ul class="playbackspeed" @click="checkPlaybackspeed">
            <li>3.0</li>
            <li>2.0</li>
            <li>1.75</li>
            <li>1.5</li>
            <li>1.25</li>
            <li>1.0</li>
            <li>0.75</li>
            <li>0.5</li>
          </ul>
        </div>

        <!-- 音量调节 -->
        <div class="Player-PlayVolume" v-show="shouPlayVolume">
          <ul class="Player-PlayVolume-Progress" @click="checkPlayVolume">
            <li class="1">100%</li>
            <li class="0.9">90%</li>
            <li class="0.8">80%</li>
            <li class="0.7">70%</li>
            <li class="0.6">60%</li>
            <li class="0.5">50%</li>
            <li class="0.4">40%</li>
            <li class="0.3">30%</li>
            <li class="0.2">20%</li>
            <li class="0.1">10%</li>
            <li class="0">0%</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 显示隐藏 -->
    <div class="Player-Lock">
      <img src="../../assets/player/playerImg/lockarea.png" alt="" />
      <div class="playerlock" @click="musicPlayerLock">
        <i class="iconfont icon-3suo" v-show="lock"></i>
        <i class="iconfont icon-fuguansuo" v-show="!lock"></i>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/player/playerIcon/iconfont.css'
import { mapState, mapMutations } from 'vuex'
import { reqTestUrl } from '../../api/reqSong'
//引入处理播放时间
import formatTime from '../../utils/formatTime'
//import cloneDeep from 'lodash/cloneDeep' //单独引入深度克隆

export default {
  name: 'MusicPlayer',
  data() {
    return {
      isPlay: true, //播放状态,暂停还是开始
      lock: false, //锁定播放栏,默认不锁
      musicPlayerShow: false, //展示播放栏,默认隐藏
      showPlayList: false, //是否展示播放栏内列表,默认隐藏
      shouPlaybackRate: false, //是否展示播放栏内倍速调节器
      shouPlayVolume: false, //是否展示播放栏内音量调节器
      songList: [
        'https://freetyst.nf.migu.cn/public/product9th/product41/2020/08/1013/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%AD%8C%E6%9B%B2%E4%B8%8B%E8%BD%BD/MP3_40_16_Stero/60054701947131404.mp3?key=bb7b45c514e2cb70&Tim=1618473208049&channelid=00&msisdn=c09b7a7dbf834b6a996c61155df5cc3e&CI=600547019472600902000006889266&F=000009',
        'https://aod.cos.tx.xmcdn.com/group63/M06/E9/28/wKgMcl0XePbyTviGAI-DAfIkYdw381.m4a',

        'https://aod.cos.tx.xmcdn.com/group20/M04/2E/7F/wKgJJ1eKo-3xGS0KAFIc8J_87NE024.m4a',

        'https://aod.cos.tx.xmcdn.com/group17/M03/2E/76/wKgJJFeKo__i8etyAFXb0kFhJ7Y007.m4a',

        'https://aod.cos.tx.xmcdn.com/group17/M03/2E/A4/wKgJKVeKpBGT3v1mAFLIvPr2HA8852.m4a',

        'https://aod.cos.tx.xmcdn.com/group17/M03/2E/76/wKgJJFeKpCKyvMI3AFU9OrpZNIQ793.m4a',

        'https://aod.cos.tx.xmcdn.com/group17/M07/2F/A4/wKgJKVeLGNeAgyP-AGIjvaEj_nI691.m4a',

        'https://aod.cos.tx.xmcdn.com/group20/M00/2F/82/wKgJJ1eLGSWCtQg0AFm5itEnch0484.m4a'
      ], //歌曲播放列表
      index: 0, //当前歌曲下标
      preSongList: [], //播放列表数据(初始数据列表),做添加播放歌曲功能
      currentSong: {
        title: [
          '《摸金天师》第001章 百辟刀',
          '《摸金天师》第002章 诡异婚书',
          '《摸金天师》第003章 夜路难走',
          '《摸金天师》第004章 他是谁',
          '《摸金天师》第005章 迷雾重重',
          '《摸金天师》第006章 凶坟',
          '《摸金天师》第007章 阴债缠身'
        ]
      }, //当前歌曲
      playSongUrl: '', //正在播放的音乐地址
      songInfo: {
        currentTime: '00 : 00 : 00', //当前音频播放位置(秒计)
        duration: '00 : 00 : 00', // 当前音频的长度(秒计)
        played: 0 ,//当前音频已经播放长度(秒计)
      }
    }
  },

  computed: {
    ...mapState({
      //musicPlayer.js公共数据 缓存用户鼠标的最近数据
      musicPlayerShowVuex: (state) => state.musicPlayer.musicPlayerShowVuex
    }),
    src() {
      return this.songList[this.index] //播放静态链接歌曲
    }
  },
  methods: {
    ...mapMutations(['changeMusicPlayerShowVuex']),

    //获取接口播放音乐                         没有
    async touchPlayMusic() {
      await reqTestUrl
      /*      const res = await reqTestUrl()
      const { id } = song
      const res = await req */
    },

    //播放当前点击对应的音频                        OK
    playThisSong(index) {
      // 当前列表查找
      console.log(index)
      // 都没有(这里是假数据,模拟一下就好)
      /*     this.playingSongUrl = this.songList[index].songUrl // 更新url
      this.playingSongImg = this.songList[index].songImg // 更新图片
      this.currentSong = this.songList[index] */
      if (!this.$refs.audio) return
      this.$refs.audio.play(this.songList[index])
      this.isPlay = false
    },

    //自动更新播放的信息                       NO
    autoMoveProgress() {
      //检测歌曲播放连接存在,存在就更新一次播放信息 时间
      clearInterval(this.interVal)
      if (this.playSongUrl) {
        this.interVal = setInterval(this.updateNowTime, 100)
      }
    },

    //更新当前播放歌曲的时间                   NO
    updateNowTime() {
      //处理已经播放的时长
      let nowTimeShow
      if (this.$refs.audio) {
        //处理播放器当前时间
        let time = formatTime(this.$refs.audio.currentTime)
        nowTimeShow = time
      } else {
        nowTimeShow = '00:00:00'
      }
      //将当前播放时长赋值到data的currentTime上
      this.songInfo.currentTime = nowTimeShow
      //如果音乐播放结束,播放下一首
      if (!this.$refs.audio) return
      if (this.$refs.audio.ended) {
        this.nextSong()
      }
    },

    //鼠标移动视口底端触发显示音乐播放栏             OK
    mouseMoveShowBar() {
      const html = document.documentElement
      const _this = this
      const vuexData = this.musicPlayerShowVuex
      //鼠标移动绑定在vm实例
      this.mouseMove = function (e) {
        //html可见高度
        let htmlHeight = html.clientHeight * 1
        //鼠标到视口顶部距离
        let mouseToWiew = e.clientY * 1
        // console.log(htmlHeight, mouseToWiew)
        //播放器应出现在鼠标移动到视口底部页面临界值之前
        if (htmlHeight - mouseToWiew < 20) {
          _this.musicPlayerShow = true
        } else {
          _this.musicPlayerShow = false
        }
      }
      html.addEventListener('mousemove', this.mouseMove)
      if (vuexData) {
        this.musicPlayerShow = vuexData
        html.removeEventListener('mousemove', this.mouseMove)
      }
      this.lock = vuexData
    },

    //锁定播放栏函数                               OK
    musicPlayerLock() {
      //点击触发,默认false没锁
      this.lock = !this.lock
      const Html = document.documentElement
      //锁上
      if (this.lock) {
        //移除监听鼠标移动事件,更新vm显示隐藏,更新vuex和缓存显示隐藏
        Html.removeEventListener('mousemove', this.mouseMove)
        this.musicPlayerShow = !this.musicPlayerShow
        this.changeMusicPlayerShowVuex(true)
      } else {
        //解锁
        Html.addEventListener('mousemove', this.mouseMove)
        this.musicPlayerShow = !this.musicPlayerShow
        this.changeMusicPlayerShowVuex(false)
      }
    },
    //播放栏 播放和暂停                            OK
    playOrPause() {
      //判断播放列表是否为空
      if (this.songList.length === 0) {
        alert('请添加有声读书')
        return
      }
      /*  const audio = this.$refs.audio //获取播放器 */
      this.isPlay = !this.isPlay // 提前调整正确播放的布尔值
      //判断是播放还是暂停
      if (this.isPlay) {
        //是播放就切换暂停
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
        const audio = new Audio(this.songList[this.index])
        audio.load()
        audio.oncanplay = () => {
          // console.log('audio.duration', audio.duration)
          let durationTime = audio.duration
          //audio.duration 1161.665011
          // this.playRadioTime = audio.duration + '″'
          let time = formatTime(durationTime)
          this.songInfo.duration = time //当前播放的音频时间
        }
      }
    },
    //

    //播放栏 上一首                                OK
    preSong() {
      /*     let { songList } = this */
      /* const index = songList. */
      let index = this.index - 1
      if (index < 0) {
        index = this.songList.length - 1
      }
      this.index = index
      this.isPlay = false
      this.$nextTick(() => this.$refs.audio.play())
      const audio = new Audio(this.songList[this.index])
      audio.load()
      audio.oncanplay = () => {
        console.log('audio.duration', audio.duration)
        //audio.duration 1161.665011
        // this.playRadioTime = audio.duration + '″'
        let durationTime = audio.duration
        //audio.duration 1161.665011
        // this.playRadioTime = audio.duration + '″'
        let time = formatTime(durationTime)
        this.songInfo.duration = time //当前播放的音频时间
      }
    },

    //下一首                                      OK
    nextSong() {
      let index = this.index + 1
      if (index === this.songList.length) {
        index = 0
      }
      this.index = index
      this.isPlay = false
      this.$nextTick(() => this.$refs.audio.play())
      const audio = new Audio(this.songList[this.index])
      audio.load()
      audio.oncanplay = () => {
        //console.log('audio.duration', audio.duration)
        //audio.duration 1161.665011
        // this.playRadioTime = audio.duration + '″'
        let durationTime = audio.duration
        //audio.duration 1161.665011
        // this.playRadioTime = audio.duration + '″'
        let time = formatTime(durationTime)
        this.songInfo.duration = time //当前播放的音频时间
      }
    },

    //移动进度条                           NO
    moveProcessFn(e) {
      e.preventDefault() // 阻止默认事件
      clearInterval(this.interVal) // 清楚进度条移动的定时器
      const that = this
      const preMousePosition = e.clientX // 按下鼠标位置
      const html = document.documentElement // html
      const Current = this.$refs.Current // 进度条
      const songProgress = this.$refs.songProgress // 进度条
      let CurrentWidth = Current.clientWidth * 1 // 进度条长度

      /* 判断:当前点击的是不是进度条本体 */
      if (e.target === Current || e.target === songProgress) {
        Current.style.width = e.offsetX - 6 + 'px' // // 事件发生点距离元素边界的距离
        CurrentWidth = Current.clientWidth * 1 // 重新获取进度条长度
      }
      /* 函数:移动鼠标 */
      const moveProcess = function (e) {
        const nowMousePosition = e.clientX
        const newPlayedWidth =
          CurrentWidth + nowMousePosition - preMousePosition
        // console.log(newPlayedWidth)
        if (newPlayedWidth > 490) return // 这里不需要判断0因为宽度为0就是最左侧
        Current.style.width = newPlayedWidth + 'px'
      }
      /* 函数:固定进度条位置 */
      const fixProcess = function () {
        html.removeEventListener('mousemove', moveProcess)
        html.removeEventListener('mouseup', fixProcess)
        if (!that.$refs.audio) return
        that.$refs.audio.play()
        const { Current, audio } = that.$refs
        const CurrentWidth = Current.clientWidth
        // tip:这里进度条总宽度为360
        audio.currentTime = audio.duration * (CurrentWidth / 490)

        that.isPlay = false // 固定进度条的同时播放音乐
      }
      // 事件:鼠标移动
      html.addEventListener('mousemove', moveProcess)
      // 事件:鼠标抬起
      html.addEventListener('mouseup', fixProcess)
    },

    //切换显示播放列表                            OK
    showPlayListFn() {
      this.windowFnFlag = 2
      this.showPlayList = !this.showPlayList
    },
    //切换显示倍速列表                            OK
    shouPlaybackRateFn() {
      //console.log(e)
      this.windowFnFlag = 2
      this.shouPlaybackRate = !this.shouPlaybackRate
    },

    //点击显示音频调节栏                          OK
    showPlayVolumeFn() {
      this.windowFnFlag = 2
      this.shouPlayVolume = !this.shouPlayVolume
    },

    //点击倍速切换显示的倍速到player               OK
    checkPlaybackspeed(e) {
      // console.log(e.target.firstChild.data)
      // console.log(this.$refs.audio.playbackRate);
      this.$refs.audio.playbackRate = e.target.firstChild.data
      //console.log(this.$refs.audio.playbackRate)
      this.$refs.playerRate.innerHTML = `x&nbsp;` + e.target.firstChild.data
      // console.log(this.$refs.playerRate)
      //console.log(this.$refs.playerRate.innerHTML)
      this.shouPlaybackRate = !this.shouPlaybackRate
    },

    //点击切换音频音量
    checkPlayVolume(e) {
      //console.log(e.target.className)
      //console.log(this.$refs.audio.volume)
      this.$refs.audio.volume = e.target.className
      this.shouPlayVolume = !this.shouPlayVolume
    },

    //初始化播放列表                          NO
    /*  async initPlayList() {
      // const res = await reqGetPlayList() //请求播放歌曲列表
      //this.songList = res.songList
      //this.preSongList = cloneDeep(res.songList) //深度克隆
      //如果歌曲有数据,将当前播放音乐的url更新为对应的第一条
      if (this.songList.length) {
        this.playSongUrl = this.songList[0].songUrl
        this.currentSong = this.songList[0]
      }
       this.autoMoveProgress() //进度条开始计时
    }, */

    //为window添加点击事件                    NO
    windowClickEvent() {
      const that = this
      this.windowFnFlag = 2
      this.windowFn = function (e) {
        if (!that.showPlayList) return
        that.windowFnFlag--
        if (that.windowFnFlag) return
        if (that.$refs.playList === undefined) return
        const flag =
          that.$refs.playList.contains(e.target) ||
          that.$refs.musicPlayer.contains(e.target)
        // console.log(flag);
        if (flag) {
          that.windowFnFlag = 1
        } else {
          that.showPlayListFn()
          that.shouPlaybackRate()
        }
      }
      window.addEventListener('click', this.windowFn)
    },

    //清空播放栏中列表                             OK
    clearPlayList() {
      this.$refs.audio.pause() //暂停音乐
      this.$refs.audio.url = '' //清空audiourl
      this.plaSongUrl = '' //清空data的url
      this.isPlay = true //取消播放状态
      this.songList = [] //清空播放列表
      this.currentSong = {
        name: '歌曲列表为空'
      }
      console.log(this.$refs.Content)
      this.$refs.Content.textContent = '已清空,暂无数据'
    }
  },
  mounted() {
    this.mouseMoveShowBar() //鼠标移动视口底端触发显示音乐播放栏
    /* this.touchPlayMusic() */
    this.interVal = null //计时器的句柄 放在this上
    // this.initPlayList() //初始化播放栏列表,获取歌曲是异步的,自动开启进度条是同步的,导致url没更新,就进去自动移动进度条
    this.windowClickEvent() //给window绑定点击事件
    this.autoMoveProgress() //自动获取音频进度

    const music = this.$refs.audio // 音频所在对象
    const musicBar = this.$refs.Current // 颜色进度条所在对象
    const musicWidth = this.$refs.songProgress.offsetWidth // 底部进度条总宽
    // console.log(musicWidth)
    const barBtn = this.$refs.Btn

    //监视更新最新播放时间
    music.addEventListener('timeupdate', () => {
      const musicTime = music.duration // 获得音频时长
      const stopTime = music.currentTime // 获得已播放的音频时长
      musicBar.style.width = `${(stopTime / musicTime) * 100}%` // 计算进度条所在比例宽度
      //console.log(musicBar.style.width)
      let currentTime = formatTime(stopTime) //更正时间格式
      this.songInfo.currentTime = currentTime //更新当前时间
      //  console.log(this.songInfo.currentTime)
    })
    /* 
    musicBar.addEventListener('mousedown', (event) => {
      console.log(event)
      const events = event.pageX // 获得触摸拖动的距离
      console.log(events)
      if (events <= musicWidth) {
        musicBar.style.width = `${(events / musicWidth) * 100}%` // 计算进度条所在比例宽度
        console.log(musicBar.style.width)
        //改变播放状态
            music.pause() // 触摸拖动时停止播放
        //改变播放状态图标
        this.isPlay = !this.isPlay
      }
    })

    // 监听进度条是否触摸拖动结束
    musicBar.addEventListener('mouseup', () => {
      const touwidth = musicBar.offsetWidth / musicWidth // 计算进度条所在比例
      music.currentTime = music.duration * touwidth // 通过所在比例赋值给音频应在的播放时

      // 改变播放状态，进行播放

      this.isPlay = !this.isPlay

      if (touwidth < musicWidth) {
        music.play() // 根据播放时间开始播放
        this.isPlay = !this.isPlay
      } else if (touwidth >= musicWidth) {
        music.pause() // 触摸拖动时停止播放
        this.isPlay = !this.isPlay
      }
    }) */
  }
}
</script>

<style lang="stylus" scoped>
.Player {
  position: fixed;
  left: 0;
  bottom: -50px; // 显示隐藏就靠它了
  height: 50px;
  width: 100%;
  background-image: url('../../assets/player/playerImg/playerBg.png');
  z-index: 999;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: 0.2s;
}

.Player .Player-Outside {
  width: 1080px;
  margin: 0 auto;
  height: 100%;
}

.Player .Player-Outside .Player-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
}

.Player .Player-container .musicImg {
  width: 30px;
  height: 30px;
  background: white;
  cursor: pointer;
  border-radius: 8px;
}

.Player-container .Player-Control {
  height: 100%;
  width: 120px;
}

.Player-container .Player-ProgressBar {
  position: relative;
  width: 610px;
  height: 100%;
}

.Player-container .Player-Focus {
  height: 100%;
  width: 160px;
}

.Player-container .Player-Set {
  height: 100%;
  width: 100px;
}

.Player-ProgressBar .musicTitle {
  position: absolute;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
}

.Player-ProgressBar .musicTitle .musicName {
  color: #fff;
}

.Player-ProgressBar .progressBar {
  position: absolute;
  bottom: 13px;
  width: 490px;
  height: 2px;
  background: transparent linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95));
}

.Player-ProgressBar .progressBar .progressBar-Load {
  height: 100%;
  background-color: #a3a3ac;
  display: block;
}

.Player-ProgressBar .progressBar .progressBar-Load .progressBar-Current {
  position: relative;
  left: 0;
  top: 0px;
  display: block;
  height: 100%;
  width: 0%;
  background-color: #f86442;
  z-index: 1;
}

.Player-ProgressBar .progressBar .progressBar-Btn {
  position: absolute;
  right: 0;
  top: -4px;
  font-size: 0;
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #fff;
}

.Player-ProgressBar .progressBar-Playtime {
  position: absolute;
  right: -16px;
  bottom: 8px;
  color: white;
}

.Player-ProgressBar .progressBar-PlaytimeReal {
  position: absolute;
  right: -28px;
  bottom: 8px;
  color: white;
  font-size: 12px;
}

.progressBar-Playtime .Playtime-Complete {
  color: #a3a3ac;
}

.progressBar-Playtime .Playtime-CompleteReal {
  color: #a3a3ac;
}

.Player-container .Player-Focus::after {
  content: '';
  width: 1px;
  height: 15px;
  background-color: #72727b;
  display: block;
  float: right;
}

/* 调整icon */
.Player .iconfont {
  color: white;
  cursor: pointer;
}

.Player .Player-Control {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Player .Player-Control .iconfont {
  padding: 0 8px;
}

.Player .Player-Control .Player-Control-Play .iconfont {
  font-size: 30px;
}

.Player-container .Player-Focus .Player-Rate {
  color: white;
  font-size: 16px;
}

.Player-container .Player-Focus {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 46px;
}

.Player-container .Player-Focus .iconfont {
  padding: 5px;
}

.Player-container .Player-Focus .icon-zhuanfa {
  font-size: 18px;
}

.Player-container .Player-Set {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.Player-container .Player-Set .iconfont {
  font-size: 18px;
}

.Player.show {
  bottom: 0px;
  box-shadow: 0 0 10px 0 rgb(148, 148, 148);
}

.Player:hover {
  bottom: 0px;
  box-shadow: 0 0 10px 0 rgb(148, 148, 148);
}

/* 播放器锁 */
.Player .Player-Lock {
  position: absolute;
  right: 35px;
  bottom: 50px;
  z-index: 999;
}

.Player .Player-Lock img {
  height: 19px;
}

.Player .Player-Lock .playerlock {
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 32px;
}

.Player .Player-Lock .playerlock .iconfont {
  font-weight: bold;
  font-size: 17px;
}

/* 组件所有hover */
.Player .iconfont:hover {
  color: #f86442;
}

/* 播放列表 */
.Player-List {
  position: fixed;
  left: 50%;
  bottom: 50px;
  width: 1080px;
  margin-left: -540px;
  background: rgba(0, 0, 0, 0.85);
  -webkit-box-shadow: 0 -2px 4px 0 rgb(0 0 0 / 20%);
  box-shadow: 0 -2px 4px 0 rgb(0 0 0 / 20%);
  border-radius: 4px 4px 0 0;
  z-index: 900;
}

.Player-List .Player-List-Top {
  margin: 0 20px;
  height: 55px;
  line-height: 55px;
  color: #fff;
  border-bottom: 1px solid rgba(163, 163, 172, 0.2);
}

.Player-List .Player-List-Top .List-Top-Left {
  font-weight: 400;
  float: left;
  font-size: 20px;
  letter-spacing: 0;
}

.Player-List .Player-List-Top .List-Top-Right {
  cursor: pointer;
  float: right;
  font-size: 15px;
}

.Player-List .Player-List-Content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 14px;
}

.Player-List .Player-List-Content .Player-List-Item {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  min-height: 42px;
  line-height: 42px;
  padding: 0 20px 0 45px;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}

.Player-PlaybackRate {
  position: absolute;
  bottom: 55px;
  right: 435px;
  border-radius: 3px;
  text-align: center;
  color: #e8e8e8;
  line-height: 22px;
  padding: 5px 10px;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(51, 51, 51, 0.75)), to(rgba(0, 0, 0, 0.85)));
  background-image: -o-linear-gradient(top, rgba(51, 51, 51, 0.75) 0, rgba(0, 0, 0, 0.85) 100%);
  background-image: linear-gradient(
    -180deg,
    rgba(51, 51, 51, 0.75) 0,
    rgba(0, 0, 0, 0.85) 100%
  );
  -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%), 0 -2px 4px 0 rgb(0 0 0 / 20%);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%), 0 -2px 4px 0 rgb(0 0 0 / 20%);
}

.Player-PlaybackRate .playbackspeed li:hover {
  color: #f86442;
}

.Player-PlayVolume {
  position: absolute;
  bottom: 55px;
  right: 279px;
  border-radius: 3px;
  text-align: center;
  color: #e8e8e8;
  line-height: 22px;
  padding: 5px 10px;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(51, 51, 51, 0.75)), to(rgba(0, 0, 0, 0.85)));
  background-image: -o-linear-gradient(top, rgba(51, 51, 51, 0.75) 0, rgba(0, 0, 0, 0.85) 100%);
  background-image: linear-gradient(
    -180deg,
    rgba(51, 51, 51, 0.75) 0,
    rgba(0, 0, 0, 0.85) 100%
  );
  -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%), 0 -2px 4px 0 rgb(0 0 0 / 20%);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%), 0 -2px 4px 0 rgb(0 0 0 / 20%);
}

.Player-PlayVolume .Player-PlayVolume-Progress li:hover {
  color: #f86442;
}
</style>
