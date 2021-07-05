import { lock, setLock } from "../../utils/musicPlayerLock";

const state = {
  musicPlayerShowVuex: lock || false,
};
const getters = {};
const actions = {};
const mutations = {
  changeMusicPlayerShowVuex(state, data) {
    // console.log(data);
    state.musicPlayerShowVuex = data;
    setLock(data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
