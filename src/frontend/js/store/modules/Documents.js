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
    newDocument(state, document) {}
  }
};
