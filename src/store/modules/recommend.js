import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    recommendList: {
      hotWordAlbums: [],
    },
  },
  getters: {},
  actions: {
    async getRecommendList({ commit }) {
      const recommendList = await API.recommend.reqGetRecommendList();
      commit("GET_RECOMMEND_LIST", recommendList);
      //console.log(info)
    },
  },
  mutations: {
    GET_RECOMMEND_LIST(state, recommendList) {
      state.recommendList = recommendList;
    },
  },
};
