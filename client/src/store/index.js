import Vue from 'vue';
import Vuex from 'vuex';

import operator from './operator/index';

Vue.use(Vuex);

const modules = {
  operator,
};

export default new Vuex.Store({
  modules,
});
