import ajax from "@/api/request.js";
import { GETCONTENTLIST } from "../mutation-types.js";

const state = {
  contentList: [],
};

const mutations = {
  [GETCONTENTLIST](state, contentCards) {
    state.contentList = contentCards;
  },
};

const actions = {
  async getContentList({ commit }) {
    let res = await ajax({
      method: "GET",
      url: "/revision/explore/v2/getRecommend",
    });
    if (res.ret === 200) {
      commit(GETCONTENTLIST, res.data.cards);
    }
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
