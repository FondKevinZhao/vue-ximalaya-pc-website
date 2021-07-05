import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    hotSearchList: {
      recKw: {
        recommendText: [],
      },
    },
  },
  getters: {},
  actions: {
    async getHotSearchList({ commit }) {
      const hotSearchList = await API.hotSearch.reqGetHotSearchList();
      commit("GET_HOTSEARCH_LIST", hotSearchList);
      //console.log(info)
    },
  },
  mutations: {
    GET_HOTSEARCH_LIST(state, hotSearchList) {
      state.hotSearchList = hotSearchList;
    },
  },
};
