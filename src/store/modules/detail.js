import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    info: {
      albumPageMainInfo: {
        albumTitle: "",
        cover: "",
        shortIntro: "",
      },
    },
  },
  getters: {},
  actions: {
    async getBaseInfo({ commit }) {
      const info = await API.detail.reqGetBaseInfo();
      commit("GET_BASE_INFO", info);
      //console.log(info)
    },
  },
  mutations: {
    GET_BASE_INFO(state, info) {
      state.info = info;
    },
  },
};
