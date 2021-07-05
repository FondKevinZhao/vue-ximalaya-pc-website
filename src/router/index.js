import Vue from "vue";
import VueRouter from "vue-router";
import channel from "../views/channel/channel.vue";
import rankingList from "../views/RankingList";
import Signin from "../views/Signin";
import Home from "../views/Home";
import Category from "../views/Category";

Vue.use(VueRouter);

const routes = [
	{
		path: "/channel",
		name: "Channel",
		component: channel,
		meta:{
			title:'小说频道_小说音频mp3在线收听-喜马拉雅'
		}
	},
	{
		path: "/rankingList",
		name: "RankingList",
		component: rankingList,
		meta:{
			title:'人气精选_排行榜-喜马拉雅'
		}
	},
	{
		path: "/signin",
		name: "Signin",
		component: Signin,
		meta: {
			keepLive: true,
			keepAlive: true,
			title:'个人登录_注册-喜马拉雅'
		}
	},
	{
		path: "/",
		name: "Home",
		component: Home,
		meta:{
			title:'有声小说,听小说,有声书,在线听书,电台FM-喜马拉雅'
		}
	},
	{
		path: "/category",
		name: "Category",
		component: Category,
		// meta参数：一旦当前路由组件被加载了，meta参数就会传入$route
		meta: {
			keepAlive: true,
			title:'全部分类声音_热门分类音频-喜马拉雅'
		}
	},
	{
		path: "/detail",
		name: "Detail",
		component: () => import("../views/Detail/Detail.vue"),
		meta:{
			title:'有声小说在线收听_喜马拉雅'
		}
	},
	{
		path: "/My",
		name: "My",
		component: () => import("../views/My/My.vue"),
		meta:{
			title:'个人中心_喜马拉雅'
		}
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	// 跳转后定位到页面左上
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	}
});
export default router;
