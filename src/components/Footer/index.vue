<template>
  <div class="Footer">
    <div class="Footer-FriendlyLink">
      <div class="FriendlyLink-Onself">
        <img
          class="Onself-Img Onself-Img-1"
          src="../../assets/footer/footerImg/kaifang.png"
          alt=""
        />
        <span class="Onself-Name">开放平台</span>
        <span class="Oneself-Intro">对接海量精彩内容</span>
      </div>
      <div class="FriendlyLink-Onself">
        <img
          class="Onself-Img"
          src="../../assets/footer/footerImg/yunjianji.png"
          alt=""
        />
        <span class="Onself-Name">云剪辑</span>
        <span class="Oneself-Intro">在线音频剪辑神器</span>
      </div>
      <div class="FriendlyLink-Onself">
        <img
          class="Onself-Img"
          src="../../assets/footer/footerImg/ximadaxue.jpg"
          alt=""
        />
        <span class="Onself-Name">喜马拉雅大学</span>
        <span class="Oneself-Intro">主播梦想孵化基地</span>
      </div>
      <div class="FriendlyLink-Onself">
        <img
          class="Onself-Img"
          src="../../assets/footer/footerImg/xiaoyaai_9944029.png"
          alt=""
        />
        <span class="Onself-Name">小雅智能</span>
        <span class="Oneself-Intro">智能硬件,连接赋能</span>
      </div>
      <div class="FriendlyLink-Onself">
        <img
          class="Onself-Img"
          src="../../assets/footer/footerImg/chezai_06ee782.png"
          alt=""
        />
        <span class="Onself-Name">车联网平台</span>
        <span class="Oneself-Intro">自在出行,听我想听</span>
      </div>
      <div class="FriendlyLink-Onself">
        <img
          class="Onself-Img"
          src="../../assets/footer/footerImg/qingxuetang_5553ef8.png"
          alt=""
        />
        <span class="Onself-Name">企业版</span>
        <span class="Oneself-Intro">员工学习,企业买单</span>
      </div>
      <div class="FriendlyLink-Onself">
        <div class="Onself-Download">
          <span>手机端</span><i class="iconfont icon-iconfonticon-shebei"></i>
        </div>
        <div class="Onself-Download">
          <span>电脑端</span><i class="iconfont icon-xiazai"></i>
        </div>
      </div>
    </div>
    <div class="Footer-title">
      <p class="title-detail">
        喜马拉雅是专业的音频分享平台，汇集了有声小说、有声读物、有声书、儿童睡前故事、相声小品、鬼故事等数亿条音频。随时随地，听我想听。<i
          class="iconfont icon-xia"
        ></i>
      </p>
      <p class="title-message">
        地址：上海市浦东新区张江丹桂路799号国创中心三期1-2号楼
        客服热线：400-838-5616 举报电话：400-838-5616
        《举报受理和处置管理办法》<i class="iconfont icon-xia"></i>
      </p>
      <div class="title-report">
        <span
          >Copyright © 2012-2021 www.ximalaya.com lnc.ALL Rights Reserved
          &nbsp;&nbsp;| &nbsp;&nbsp;</span
        >
        <span
          >&nbsp;&nbsp;<img
            src="../../assets/footer/footerImg/icon_email_c8834ec.png"
            alt=""
          />&nbsp;上海互联网举报中心&nbsp;&nbsp;| &nbsp;&nbsp;</span
        >
        <span
          >&nbsp;&nbsp;<img
            src="../../assets/footer/footerImg/report_13a6134.png"
            alt=""
          />&nbsp;网上有害信息举报专区&nbsp;&nbsp;|&nbsp;</span
        >
        <img
          src="../../assets/footer/footerImg/first_middle_h_img.png"
          alt=""
        />
      </div>
    </div>
    <ul class="Footer-about">
      <li class="about-item">关于我们</li>
      <li class="about-item">联系我们</li>
      <li class="about-item">求助</li>
      <li class="about-item">辟谣</li>
      <li class="about-item">公司新闻</li>
      <li class="about-item">招贤纳士</li>
      <li class="about-item">用户反馈</li>
      <li class="about-item">用户服务协议</li>
      <li class="about-item">隐私政策</li>
      <li class="about-item">版权声明</li>
      <li class="about-item">直播平台</li>
      <li class="about-item">自律承诺</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="stylus" scoped>
.Footer {
  overflow: hidden;
  width: 1080px;
  margin: 50px auto 0;
}

.Footer .Footer-FriendlyLink {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 20px;
}

.Footer-FriendlyLink .FriendlyLink-Onself {
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  align-items: space-between;
  width: 116px;
  height: 86px;
  font-size: 14px;
  padding-left: 5px;
}

.Footer-FriendlyLink .FriendlyLink-Onself .Onself-Img {
  padding-bottom: 10px;
  width: 40px;
  height: 40px;
}

.Footer-FriendlyLink .FriendlyLink-Onself .Onself-Img-1 {
  height: 24px;
  width: 50px;
  margin: 8px 0 8px;
}

.Footer-FriendlyLink .FriendlyLink-Onself .Onself-Name {
  display: block;
  color: #666;
}

.Footer-FriendlyLink .FriendlyLink-Onself .Oneself-Intro {
  display: block;
  color: #a3a3ac;
}

.Footer-FriendlyLink .FriendlyLink-Onself .Onself-Download {
  width: 116px;
  height: 30px;
  background: linear-gradient(
    180deg,
    #fa2800 0,
    #ff5e3d 100%,
    #ff5e3d 100%
  );
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  color: #fff;
  user-select: none;
  cursor: pointer;
  border-radius: 14px;
  margin-bottom: 25px;
}

.Footer-FriendlyLink .FriendlyLink-Onself .Onself-Download .iconfont {
  padding-left: 10px;
}

.Footer-FriendlyLink .FriendlyLink-Onself .Onself-Download .icon-iconfonticon-shebei {
  font-size: 10px;
}

.Footer .Footer-title {
  text-align: center;
  font-size: 12px;
  color: #999;
  letter-spacing: 0;
}

.Footer .Footer-title .title-detail {
  margin-bottom: 10px;
}

.Footer .Footer-title .title-message {
  margin-bottom: 20px;
}

.Footer .Footer-title .title-report {
  margin-bottom: 20px;
}

.Footer .Footer-title .title-report img {
  height: 20px;
  vertical-align: middle;
  padding: 0 6px;
}

.Footer .Footer-about {
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding-bottom: 80px;
}

.Footer .Footer-about .about-item::after {
  content: '|';
  width: 1px;
  height: 10px;
  color: #ccc;
  padding: 0 10px;
}

.Footer .Footer-about .about-item:last-child::after {
  content: '';
}
</style>
