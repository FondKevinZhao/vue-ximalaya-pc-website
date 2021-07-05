import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    albumList: {},
  },
  getters: {},
  actions: {
    async getAlbumList({ commit }) {
      const albumList = await API.album.reqGetAlbumList();
      commit("GET_ALBUM_LIST", albumList);
      //console.log(info)
    },
  },
  mutations: {
    GET_ALBUM_LIST(state, albumList) {
      state.albumList = albumList;
    },
  },
};
