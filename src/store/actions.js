import { fetchItemList, fetchUserInfo, fetchItemInfo } from "@/api/index.js";

export default {
  // mutation에 접근하기 위한 변수 context

  // promise
  // FETCH_LIST(context, name) {
  //   return fetchItemList(name)
  //     .then((response) => {
  //       // SET_NEWS mutation 커밋, response.data를 넘겨줌
  //       context.commit("SET_LIST", response.data);
  //       return response;
  //     })
  //     .catch((err) => console.log(err));
  // },

  // async -> promise만 리턴 -> api의 fetchItemList에서 에러처리 하므로 try catch를 사용하지 않았음
  async FETCH_LIST(context, routerName) {
    const response = await fetchItemList(routerName);
    // SET_NEWS mutation 커밋, response.data를 넘겨줌
    context.commit("SET_LIST", response.data);
    return response;
  },

  async FETCH_USER(context, name) {
    try {
      const response = await fetchUserInfo(name);
      context.commit("SET_USER", response.data);
      context.commit("endSpinner");
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async FETCH_ITEM(context, value) {
    try {
      const response = await fetchItemInfo(value);
      context.commit("SET_ITEM", response.data);
      context.commit("endSpinner");
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
