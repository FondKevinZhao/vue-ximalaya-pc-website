import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    myList: {},
  },
  getters: {},
  actions: {
    async getMyList({ commit }) {
      const myList = await API.myList.reqGetMyList();
      commit("GET_MYLIST", myList);
      //console.log(info)
    },
  },
  mutations: {
    GET_MYLIST(state, myList) {
      state.myList = myList;
    },
  },
};
