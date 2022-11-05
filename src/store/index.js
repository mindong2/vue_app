import { createStore } from "vuex";
import mutations from "../store/mutations";
import actions from "../store/actions";
export default createStore({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  getters: {
    fetchNews(state) {
      return state.news;
    },
    fetchedAsk(state) {
      return state.ask;
    },
    fetchJobs(state) {
      return state.jobs;
    },
  },
  // import mutation, actions modules

  // state직접 변경
  mutations,
  // 비동기 호출 actions , state 변경 XXX
  actions,
  modules: {},
});
