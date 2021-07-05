<template>
  <el-card class="el">
    <div class="Signup">
      <!-- 密码登录，短信登录 -->
      <div class="tab-wrapper" v-show="QRcodelogin === false">
        <!-- 右上角点击tab切换二维码登录 -->
        <img
          class="oimg"
          @click="handelImg()"
          src="../../assets/tu/ma.png"
          alt=""
        />
        <div class="web-tab-nav">
          <div class="web-tab-item1 active" @click="handelClick(false)">
            密码登录
          </div>
          <div class="web-tab-item2" @click="handelClick(true)">
            短信登录/注册
          </div>
        </div>
        <div class="web-tab-content">
          <!-- 手机号 -->
          <div class="form-item">
            <div class="phone-username">
              <span class="pan">+86 </span> <i class="el-icon-arrow-down"></i>
            </div>
            <el-input
              class="el-input"
              v-model="username"
              placeholder="请输入手机号"
            ></el-input>
          </div>
          <!-- 密码 -->
          <div class="form-item" v-show="disappear === false">
            <el-input
              class="password"
              v-model="password"
              placeholder="请输入密码"
            ></el-input>
            <div
              :class="
                InputYanJing ? 'iconfont icon-yanjing' : 'iconfont icon-biyan'
              "
            ></div>
          </div>
          <!-- 短信 -->
          <div class="form-ite" v-show="disappear === true">
            <div class="short">
              <el-input
                class="shortmessage"
                v-model="shortmessage"
                placeholder="请输入6位短信"
              ></el-input>
            </div>
            <div class="time-btn">获取验证码</div>
          </div>
          <div class="clearfix" v-show="disappear === false">
            <div class="login">邮箱登录</div>
            <div class="PW">忘记密码</div>
          </div>
          <el-button class="btn" type="primary">登录</el-button>
          <div class="chefix">
            <el-checkbox class="box" v-model="checked"
              ><span class="jizhuw">记住我</span></el-checkbox
            >
            <div class="download">
              下载<router-link class="link-to" to="">喜马拉雅</router-link
              >，体验更多内容
            </div>
          </div>
          <div class="titlelogin">
            <div class="title-p">
              <div class="title">第三方账号登录</div>
            </div>
          </div>
          <!-- QQ微信微博组件 -->
          <qqweixinweibo />
        </div>
      </div>
      <!-- 二维码验证登录 -->
      <div class="tab-wrappe" v-show="QRcodelogin === true">
        <img
          class="oimg"
          @click="handelImg()"
          src="../../assets/tu/ma.png"
          alt=""
        />
        <div class="code">
          <div class="qrcode">
            <img
              src="../../assets/tu/vtuc4y40nvamkoalt76z1p2c4afmge4a.png"
              alt=""
            />
          </div>
          <div class="login-code">请打开喜马拉雅 App，扫描二维码</div>
          <div class="login-code">免输入，快速，更安全</div>
        </div>
        <div class="titlelogin">
          <div class="title-p">
            <div class="title">第三方账号登录</div>
          </div>
        </div>
        <!-- QQ微信微博组件 -->
        <qqweixinweibo />
      </div>
    </div>
  </el-card>
</template>

<script>
import qqweixinweibo from '../../components/qqweixinweibo/qqweixinweibo.vue'
export default {
  name: 'Signin',
  data() {
    return {
      username: '',
      password: '',
      InputYanJing: false,
      checked: false,
      flag: true,
      shortmessage: '',
      disappear: false,
      QRcodelogin: false
    }
  },
  components: {
    qqweixinweibo
  },
  methods: {
    handelClick(show) {
      if (show === true) {
        this.disappear = true
      } else {
        this.disappear = false
      }
    },
    handelImg(number) {
      this.QRcodelogin = !this.QRcodelogin
    }
  }
}
</script>

<style lang="stylus" scoped>
.el {
  height: 720px;
  width:1550px;
  position: fixed;
  left: 0;
  top: 0;
  margin: 0 auto;
  z-index: 999;
  background-image: url('../../assets/tu/bg_033fe57.jpg');
  background-position: center center;

  .el-card__body {
    width: 100%;
    height: 100%;
    padding: 0;

    .Signup {
      width: 100%;
      height: 100%;
      padding: 0;
      position: relative;
      background-size: cover;
      background-repeat: no-repeat;

      .tab-wrapper {
        width: 444px;
        height: 555px;
        position: absolute;
        right: 70px;
        background: rgba(35, 21, 62, 0.7);
        padding: 0 40px 40px 40px;
        box-sizing: border-box;

        .oimg {
          width: 75px;
          height: 75px;
          position: absolute;
          right: 0;
        }

        .web-tab-nav {
          width: 346px;
          height: 52px;
          display: flex;
          align-items: center;
          color: rgb(150, 141, 159);
          padding: 17px 0;
          border-bottom: 1px solid rgb(75, 60, 93);

          .web-tab-item1 {
            margin-right: 36px;
            font-size: 15px;
          }

          .web-tab-item2 {
            margin-right: 36px;
            font-size: 16px;
          }

          .active {
            color: rgb(246, 245, 246);
          }
        }

        .web-tab-content {
          width: 364px;
          padding-top: 36px;

          .form-item {
            width: 364px;
            height: 50px;
            display: flex;
            padding: 14px 0;
            justify-content: center;
            align-items: center;
            margin-bottom: 16px;
            background: rgba(32, 45, 57, 0.4);
            border-radius: 30px;
            overflow: hidden;
            box-sizing: border-box;

            .phone-username {
              width: 85px;
              text-align: center;
              border-right: 1px solid white;

              .pan {
                width: 55px;
                color: rgb(235, 233, 237);
              }

              i {
                color: rgb(163, 163, 172);
              }
            }

            .el-input {
              width: 246px;
              height: 20px;
              padding: 0 20px 0 0;
              box-sizing: border-box;
            }

            .el-input__inner {
              width: 246px;
              height: 20px;
              color: rgb(234, 232, 237);
              background: none;
              border: none;
            }

            .password {
              width: 280px;
              height: 20px;
            }

            .icon-yanjing {
              font-size: 25px;
              color: rgb(152, 152, 152);
            }

            .icon-biyan {
              font-size: 25px;
              color: rgb(152, 152, 152);
            }
          }

          .form-ite {
            width: 364px;
            height: 66px;
            display: flex;
            padding: 14px 0;
            justify-content: center;
            align-items: center;
            margin-bottom: 16px;
            overflow: hidden;
            box-sizing: border-box;

            .short {
              width: 230px;
              height: 50px;
              border-radius: 30px;
              display: flex;
              align-items: center;
              background: rgba(32, 45, 57, 0.4);

              .el-input__inner {
                width: 230px;
                height: 50px;
                padding-left: 30px;
                color: rgb(234, 232, 237);
                background: none;
                border: none;
              }
            }

            .time-btn {
              width: 118px;
              height: 50px;
              text-align: center;
              line-height: 50px;
              color: rgb(156, 134, 141);
              background: rgba(32, 45, 57, 0.4);
              border-radius: 30px;
            }
          }

          .clearfix {
            width: 346px;
            display: flex;
            font-size: 15px;
            justify-content: space-between;
            color: rgb(219, 217, 223);

            .login {
              margin-right: 220px;
            }
          }

          .el-button--primary {
            width: 100%;
            border-radius: 30px;
            margin-top: 24px;
            background: rgba(32, 45, 57, 0.4);
            border: none;
          }

          .chefix {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;

            .box {
              .jizhuw {
                color: rgb(243, 244, 245);
              }
            }

            .download {
              font-size: 12px;
              color: rgb(243, 244, 245);

              .link-to {
                color: rgb(242, 72, 33);
              }
            }
          }

          .titlelogin {
            width: 100%;
            margin: 30px 0;
            text-align: center;

            .title-p {
              display: flex;
              justify-content: space-around;
              align-items: center;

              .title {
                color: rgb(243, 244, 245);
                font-size: 12px;
              }

              &::before {
                content: '';
                width: 100px;
                height: 1px;
                background: rgb(215, 208, 217);
              }

              &::after {
                content: '';
                width: 100px;
                height: 1px;
                background: rgb(215, 208, 217);
              }
            }
          }
        }
      }

      .tab-wrappe {
        width: 444px;
        height: 555px;
        position: absolute;
        right: 70px;
        background: rgba(35, 21, 62, 0.7);
        padding: 0 40px 40px 40px;
        box-sizing: border-box;

        .oimg {
          width: 75px;
          height: 75px;
          position: absolute;
          right: 0;
        }

        .code {
          width: 364px;
          text-align: center;

          .qrcode {
            width: 240px;
            height: 240px;
            line-height: 240px;
            margin: 60px 62px 20px 62px;
            background: rgb(63, 47, 89);
            border-radius: 30px;
            text-align: center;

            img {
              width: 200px;
              height: 200px;
            }
          }

          .login-code {
            width: 100%;
            font-size: 18px;
            color: white;
          }
        }

        .title-p {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 30px 0;

          .title {
            color: rgb(243, 244, 245);
            font-size: 12px;
          }

          &::before {
            content: '';
            width: 100px;
            height: 1px;
            background: rgb(215, 208, 217);
          }

          &::after {
            content: '';
            width: 100px;
            height: 1px;
            background: rgb(215, 208, 217);
          }
        }
      }
    }
  }
}
</style>
