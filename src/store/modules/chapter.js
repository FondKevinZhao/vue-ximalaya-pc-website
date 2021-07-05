import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    chapterList: {
      tracks: [],
    },
  },
  getters: {},
  actions: {
    async getChapterList({ commit }) {
      const chapterList = await API.chapter.reqGetChapterList();
      commit("GET_CHAPTER_LIST", chapterList);
      //console.log(info)
    },
  },
  mutations: {
    GET_CHAPTER_LIST(state, chapterList) {
      state.chapterList = chapterList;
    },
  },
};
