import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    readerInfo: {},
  },
  getters: {},
  actions: {
    async getReaderInfo({ commit }) {
      const readerInfo = await API.reader.reqGetReaderInfo();
      commit("GET_READER_INFO", readerInfo);
      //console.log(info)
    },
  },
  mutations: {
    GET_READER_INFO(state, readerInfo) {
      state.readerInfo = readerInfo;
    },
  },
};
