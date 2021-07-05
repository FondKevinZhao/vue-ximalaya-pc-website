<template>
  <el-card>
    <div class="layout">
      <div class="breadcrumb">
        <router-link class="bread-crumb-link" to="/">首页</router-link>
        <span class="span1"> > </span>
        <router-link class="bread-crumb-link" to="/Channel"> 全部频道 </router-link>
        <span class="span1"> > </span>
        <div
          class="bread-crumb-drop-trigger"
          @mouseenter="handelmove"
          @mouseleave="handelmove"
        >
          <div class="move">
            <span class="lianJie">小说</span>
            <span class="el-icon-arrow-down ddt"></span>
          </div>
          <div class="bread-crumb">
            <ul class="bread-crumb-drop-main">
              <li v-for="(item, index) in Allchannels.groups" :key="index">
                <router-link to="">{{ item.name }}</router-link>
              </li>
              <router-link to=""="more !== Allchannels.groups.length">更多(...)</router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="layout-side-side">
        <!-- 侧边栏 -->
        <Sidebar :Allchannels="Allchannels" />
        <!-- 右侧故事区域 -->
        <div class="main">
          <!--  -->
          <AudioList :lis="list" />
        </div>
      </div>
      <Pagination/>
    </div>
  </el-card>
</template>

<script>
import Sidebar from '../../components/sidebar/sidebar.vue'
import AudioList from '../../components/AudioList/AudioList.vue'
import { novel } from '../../api/audioli'
import { EncyClopedia } from '../../api/audioli'
import Pagination from '../../components/Pagination'

export default {
  name: 'channel',
  data() {
    return {
      list: {},
      show: false,
      Allchannels: {},
      more: 23
    }
  },
  methods: {
    handelmove() {
      this.show = !this.show
    },

    
  },
  computed: {
  },
  async mounted() {
    const res = await novel()
    this.list = res.data
    console.log(this.list)

    const dia = await EncyClopedia()
    this.Allchannels = dia.data
  },
  components: {
    AudioList,
    Sidebar,
    Pagination
  }
}
</script>

<style lang="stylus" scoped>
.layout {
  width: 1080px;
  margin: 0 auto;

  .breadcrumb {
    display: flex;
    align-items: center;
    margin: 20px 0;
    font-size: 12px;

    .bread-crumb-link {
      color: rgb(114, 114, 123);
    }

    .move {
      width: 48px;
      height: 26px;
      padding-top: 4px;
      text-align: center;
      position: relative;
      border-radius: 5px;
      color: rgb(114, 114, 123);
      border: 1px solid rgb(163, 163, 180);
      vertical-align: middle;

      &:hover .lianJie {
        color: rgb(248, 100, 34);
      }

      &:hover .ddt {
        transition: transform 1s;
        transform: rotateZ(-180deg);
      }
    }

    a:hover {
      color: rgb(248, 100, 34);
    }

    .span1 {
      margin: 0 5px;
    }
  }

  .bread-crumb {
    position: absolute;
    display: none;
    width: 300px;
    padding: 10px;

    .bread-crumb-drop-main {
      width: 300px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      border: 1px solid rgb(168, 168, 168);
      background: rgb(255, 255, 255);
      border-radius: 3px;
      padding: 10px;
      z-index: 100;

      li {
        padding: 5px;
        font-size: 14px;

        &:hover {
          color: rgb(248, 100, 34);
        }

        a {
          color: #72727b;
        }
      }
    }
  }

  .bread-crumb-drop-trigger:hover .bread-crumb {
    display: block;
  }
}

// 侧边栏
.layout-side-side {
  display: flex;

  .title {
    margin-bottom: 24px;
    font-weight: bold;
  }
}

.main {
  width: 800px;

  .title {
    margin-bottom: 31px;
  }

  .link {
    padding-top: 45px;
    color: rgb(163, 163, 172);
  }
}

.fenyeqi {
  width: 100%;
  margin: 30px auto;
}
</style>
