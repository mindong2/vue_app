import {
  fetchItemList,
  fetchUserInfo,
  fetchItemInfo,
} from "@/api/index.js";

export default {
  // mutation에 접근하기 위한 변수 context

  FETCH_LIST(context, name) {
    fetchItemList(name)
      .then((response) => {
        // SET_NEWS mutation 커밋, response.data를 넘겨줌
        context.commit("SET_LIST", response.data);
      })
      .catch((err) => console.log(err));
  },

  FETCH_USER(context, name) {
    fetchUserInfo(name)
      .then((response) => {
        context.commit("SET_USER", response.data);
      })
      .catch((err) => console.log(err));
  },

  FETCH_ITEM(context, value) {
    fetchItemInfo(value)
      .then((response) => {
        context.commit("SET_ITEM", response.data);
      })
      .catch((err) => console.log(err));
  },
};
