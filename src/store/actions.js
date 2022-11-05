import { fetchNewsList, fetchAskList, fetchJobsList } from "@/api/index.js";

export default {
  // mutation에 접근하기 위한 변수 context
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        // SET_NEWS mutation 커밋, response.data를 넘겨줌
        context.commit("SET_NEWS", response.data);
      })
      .catch((err) => console.log(err));
  },

  // distructuring context.commit -> { commit } / response.data -> { data }
  FETCH_ASKS({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASKS", data);
      })
      .catch((err) => console.log(err));
  },

  FETCH_JOBS(context) {
    fetchJobsList()
      .then((response) => {
        context.commit("SET_JOBS", response.data);
      })
      .catch((err) => console.log(err));
  },
};
