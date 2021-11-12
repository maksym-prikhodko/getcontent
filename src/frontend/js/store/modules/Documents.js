import uuidv4 from "uuid/v4";
import { cloneDeep, isSet } from "lodash";
export default {
  namespaced: true,
  state: {
    all: [],
    blankDocument: {
      name: null,
      group_id: null,
      content: {
        fields: [{ type: "html", model: "" }]
      },
      status: "draft",
      template: null
    }
  },
  getters: {
    all: state => {
      return state.all;
    },
    blankDocument: state => () => {
      return cloneDeep(state.blankDocument);
    },
    byUuid: state => uuid => {
      return state.all.find(document => document.uuid === uuid);
    }
  },
  mutations: {
    addDocument(state, document) {
      state.all.push(document);
    },
    updateDocument(state, {uuid, document}) {
      let documentIndex = state.all.findIndex(
        document => document.uuid === uuid
      );
      state.all[documentIndex] = document;
    }
  },
  actions: {
    saveDocument({ commit }, document) {
      if (document.uuid) {
        return commit("updateDocument", {uuid: document.uuid, document});
      }
      document.uuid = uuidv4();
      return commit("addDocument", document);
    }
  }
};
