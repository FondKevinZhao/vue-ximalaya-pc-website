import { Ranking } from '../../api/rankinglist';
import { RANKIN } from '../mutation-types';

const state = {
	hitlist: {}
};
const actions = {
	async Rankin({ commit }) {
		const res = await Ranking() 
		commit(RANKIN, res);
	}
};
const mutations = {
	[RANKIN]: (state, hit) => {
		state.hitlist = hit.data;
	}
};
export default {
	state,
	actions,
	mutations
};
