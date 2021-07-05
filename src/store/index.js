import Vue from 'vue';
import Vuex from 'vuex';

//导入所有的(在modules单个导出的模块)
import * as modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
    modules
});
