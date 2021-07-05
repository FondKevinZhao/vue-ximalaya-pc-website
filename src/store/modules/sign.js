import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    signList: {
      category: {},
    },
  },
  getters: {},
  actions: {
    async getSign({ commit }) {
      const signList = await API.sign.reqGetSign();
      commit("GET_SIGN", signList);
      //console.log(info)
    },
  },
  mutations: {
    GET_SIGN(state, signList) {
      state.signList = signList;
    },
  },
};
