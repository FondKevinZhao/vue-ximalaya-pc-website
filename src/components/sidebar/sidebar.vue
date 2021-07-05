<template>
  <div class="side-left">
    <h3 class="title">全部频道(26)</h3>
    <ul class="wrapper">
      <li v-for="(item, index) in Allchannels.groups" :key="index">
        <router-link to="" :class="index === 0 ? 'active' : ''">{{
          `${item.name} (${item.channelCount})`
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["Allchannels"],
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {});
  },
};
</script>

<style lang="stylus" scoped>
.side-left
    width 240px
    .wrapper
        li
            width 120px
            height 20px
            margin-bottom 16px
            display inline-block
            a
                color rgb(163, 163, 172)
            a:hover
                color: #fc5832;
.active
    color  #fc5832 !important;
</style>
