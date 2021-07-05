import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/zh-CN";
import '../public/icon_font/iconfont.css'
import './style/index.css';
import '../src/assets/css/global.css'

import iconfont from "./static/iconfont/iconfont.css";

Vue.use(ElementUI, { locale });

import Footer from "./components/Footer";
import Header from "./components/Header";
import MusicPlayer from "./components/MusicPlayer/index.vue";
import "@/assets/css/global.styl";

//引入API 原型上注册
import * as API from "./api";
//CSS清空公共样式表
// import "@/assets/css/reset.css";
//HeaderIconfont@与 FooterIconfont 与 Player播放栏Icon样式
import "./assets/header/headerIcon/iconfont.css";

import Pagination from "./components/Pagination";

Vue.component("Footer", Footer);
Vue.component("Header", Header);
Vue.component("MusicPlayer", MusicPlayer);
Vue.component("Pagination", Pagination);

// 引入icon-font图标库
import "./assets/icon/iconfont.css";

/* import './assets/css/global.styl' */
Vue.use(ElementUI, { locale });

import "./assets/font/iconfont.css";

Vue.config.productionTip = false;
//全局API请求
Vue.prototype.$API = API;
// 全局事件总线
Vue.prototype.$bus = new Vue();

/* const defaultTitle = '默认 title' */
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '喜马拉雅'
  next()
})

new Vue({
	router,
	store,
	iconfont,
	render: (h) => h(App)
}).$mount("#app");
