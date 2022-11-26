import { fetchItemList, fetchUserInfo, fetchItemInfo } from "@/api/index.js";

export default {
  // mutation에 접근하기 위한 변수 context

  FETCH_LIST(context, name) {
    return fetchItemList(name)
      .then((response) => {
        // SET_NEWS mutation 커밋, response.data를 넘겨줌
        context.commit("SET_LIST", response.data);
        return response;
      })
      .catch((err) => console.log(err));
  },

  FETCH_USER(context, name) {
    fetchUserInfo(name)
      .then((response) => {
        context.commit("SET_USER", response.data);
        context.commit("endSpinner");
      })
      .catch((err) => console.log(err));
  },

  FETCH_ITEM(context, value) {
    fetchItemInfo(value)
      .then((response) => {
        context.commit("SET_ITEM", response.data);
        context.commit("endSpinner");
      })
      .catch((err) => console.log(err));
  },
};
