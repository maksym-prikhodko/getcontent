export default {
  namespaced: true,
  state: {
    all: []
  },
  getters: {
    all: state => {
      return state.all;
    },
    blankDocument: state => {
      return {
        name: null,
        slug: null,
        description: null,
        owner_id: null,
        group_id: null,
        content: {
          fields: []
        }
      };
    }
  },
  mutations: {
      addDocument(state, document) {
        state.all.push(document)
      }
  },
    actions: {
      saveDocument ({commit}, document) {
       document.id = uuidv4()
          commit('addDocument', document)
      }
    }
};
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
}
