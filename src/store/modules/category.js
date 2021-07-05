import * as API from "../../api";

export default {
  //开启命名空间
  namespaced: true,
  state: {
    categoryInfo: [],
  },
  getters: {},
  actions: {
    async getCategory({ commit }) {
      const categoryInfo = await API.category.reqCategory();
      console.log(categoryInfo);
      commit("GET_CATEGORY", categoryInfo);
    },
  },
  mutations: {
    GET_CATEGORY(state, categoryInfo) {
      state.categoryInfo = categoryInfo;
      console.log(state.categoryInfo);
    },
  },
};
