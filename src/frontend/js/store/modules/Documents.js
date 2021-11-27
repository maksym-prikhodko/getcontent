import uuidv4 from "uuid/v4";
import { cloneDeep, isSet, remove, filter } from "lodash";
import api from "../../api";
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
    },
    inRoot: state => {
      return filter(state.all, document => document.group_id === null);
    },
    inGroup: state => id => {
      return filter(state.all, document => document.group_id === id);
    }
  },
  mutations: {
    setAll(state, documents) {
      state.all = documents;
    },
    addDocument(state, document) {
      state.all.push(document);
    },
    updateDocument(state, { uuid, document }) {
      let documentIndex = state.all.findIndex(
        document => document.uuid === uuid
      );
      state.all[documentIndex] = document;
    },
    removeDocument(state, uuid) {
      state.all = remove(state.all, document => document.uuid === uuid)
    }
  },
  actions: {
    loadDocuments({ commit }) {
      return new Promise((resolve, reject) => {
        api.get("documents").then(payload => {
          resolve();
          return commit("setAll", payload.data.data);
        }, reject);
      });
    },
    saveDocument({ commit }, document) {
      return new Promise((resolve, reject) => {
        if (document.id) {
          return api.put(`documents/${document.id}`, document).then(payload => {
            resolve();
            commit("updateDocument", {
              uuid: document.uuid,
              document: payload.data.data
            });
          }, reject);
        }
        document.uuid = uuidv4();
        return api.post("documents", document).then(payload => {
          resolve();
          commit("addDocument", payload.data.data);
        }, reject);
      });
    },
    deleteDocument({ commit }, document) {
      return new Promise((resolve, reject) => {
        return api
          .delete(`documents/${document.id}`, document)
          .then(payload => {
            resolve();
            commit("removeDocument", { uuid: document.uuid });
          }, reject);
      });
    }
  }
};
