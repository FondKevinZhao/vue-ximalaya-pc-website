import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    relateList: {},
  },
  getters: {},
  actions: {
    async getRelateList({ commit }) {
      const relateList = await API.relate.reqGetRelateList();
      commit("GET_RELATE_LIST", relateList);
      //console.log(info)
    },
  },
  mutations: {
    GET_RELATE_LIST(state, relateList) {
      state.relateList = relateList;
    },
  },
};
