import { createStore } from "vuex";
import mutations from "../store/mutations";
import actions from "../store/actions";
export default createStore({
  state: {
    tabList: [],
    user: {},
    item: {},
    isLoading: false
  },
  getters: {
    fetchedList(state) {
      return state.item;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  // import mutation, actions modules

  // state직접 변경
  mutations,
  // 비동기 호출 actions , state 변경 XXX
  actions,
  modules: {},
});
