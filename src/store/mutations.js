export default {

  SET_LIST(state, list) {
    state.tabList = list;
  },

  SET_USER(state, name) {
    state.user = name;
  },

  SET_ITEM(state, item) {
    state.item = item;
  },
  startSpinner(state){
    state.isLoading = true;
  },
  endSpinner(state){
    state.isLoading = false;
  }
};
