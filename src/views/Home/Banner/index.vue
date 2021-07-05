<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper" v-if="bannerList.length > 0">
      <swiper-slide v-for="item in bannerList" :key="item.focusId"
        ><img
          :src="`https://imagev2.xmcdn.com/` + item.coverPath"
          alt="item.longTitle"
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 改变箭头颜色 -->
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import ajax from "@/api/request.js";

export default {
  name: "Banner",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlidesBounds: true,
        // 使用了effect下面的coverflowEffect（覆盖流效应）才可以生效
        effect : 'coverflow',
        autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false
            },
            // 设置点击箭头
        navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
        // 覆盖流效应
        coverflowEffect: {
          rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。0是平面滑动
          stretch: 100, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。可以理解为间距
          depth: 200, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。视距
          modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          slideShadows: true, //开启slide阴影。默认 true。
        },
      },
      bannerList: [],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  async created() {
    let result = await ajax({
      method: "GET",
      url: "/revision/ad/slideshow",
    });

    this.bannerList = result.data.slideshow;
  },
};
</script>
<style lang="stylus" scoped>
.recommendPage
	width 1080px
	padding-bottom 40px
	margin 0 auto
	.swiper-container
		position relative
		width 100%
		height 300px
		.swiper-slide
			display flex
			justify-content center
			position relative
			transform translateX(-50%)
			width: 100%
			line-height: 300px
			color: #000
			font-size: 16px
			text-align: center
			img
				border-radius 12px
				width 750px
				height 300px
</style>
