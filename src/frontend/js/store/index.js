import Vue from "vue";
import Vuex from "vuex";
import Documents from "./modules/Documents";
import Groups from "./modules/Groups";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    Documents,
    Groups
  }
});
