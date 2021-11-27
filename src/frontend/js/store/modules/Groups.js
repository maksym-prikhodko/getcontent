import uuidv4 from "uuid/v4";
import { cloneDeep, isSet, remove, filter } from "lodash";
import api from "../../api";
export default {
  namespaced: true,
  state: {
    all: [],
    blankGroup: {
      name: null,
      parent_id: null,
    }
  },
  getters: {
    all: state => {
      return state.all;
    },
    blankGroup: state => () => {
      return cloneDeep(state.blankGroup);
    },
    byUuid: state => uuid => {
      return state.all.find(group => group.uuid === uuid);
    },
    byId: state => id => {
      return state.all.find(group => group.id === id);
    },
    inRoot: state => {
      return filter(state.all, group => group.parent_id === null);
    },
    inGroup: state => id => {
      return filter(state.all, group => group.parent_id === id);
    }
  },
  mutations: {
    setAll(state, groups) {
      state.all = groups;
    },
    addGroup(state, group) {
      state.all.push(group);
    },
    updateGroup(state, { uuid, group }) {
      let groupIndex = state.all.findIndex(
        group => group.uuid === uuid
      );
      state.all[groupIndex] = group;
    },
    removeGroup(state, uuid) {
      state.all = remove(state.all, group => group.uuid === uuid)
    }
  },
  actions: {
    loadGroups({ commit }) {
      return new Promise((resolve, reject) => {
        api.get("groups").then(payload => {
          resolve();
          return commit("setAll", payload.data.data);
        }, reject);
      });
    },
    saveGroup({ commit }, group) {
      return new Promise((resolve, reject) => {
        if (group.id) {
          return api.put(`groups/${group.id}`, group).then(payload => {
            resolve();
            commit("updateGroup", {
              uuid: group.uuid,
              group: payload.data.data
            });
          }, reject);
        }
        group.uuid = uuidv4();
        return api.post("groups", group).then(payload => {
          resolve();
          commit("addGroup", payload.data.data);
        }, reject);
      });
    },
    deleteGroup({ commit }, group) {
      return new Promise((resolve, reject) => {
        return api
          .delete(`groups/${group.id}`, group)
          .then(payload => {
            resolve();
            commit("removeGroup", { uuid: group.uuid });
          }, reject);
      });
    }
  }
};
