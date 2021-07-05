<template>
  <div>
    <Banner />
    <Nav />
    <Recommend />
    <ContentList v-for="item in contentList" :key="item.categoryId" :cardObj="item" />
    <Ranking />
  </div>
</template>
<script>
import Banner from "./Banner";
import Nav from "./Nav";
import Recommend from "./Recommend";
import ContentList from "./ContentList";
import Ranking from "./Ranking";
import {mapState,mapActions} from 'vuex'
export default {
  name: "Home",
  components: {
    Banner,
    Nav,
    Recommend,
    ContentList,
    Ranking
  },
  data(){
    return {

    }
  },
  mounted(){
    this.getContentList()
  },
  methods:{
    ...mapActions(['getContentList'])
  },
  computed:{
    ...mapState({
      contentList:state=>state.home.contentList
    })
  }
};
</script>

