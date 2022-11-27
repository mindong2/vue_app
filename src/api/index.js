import axios from "axios";

// HTTP Request & Response 기본설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// API 함수 정리

async function fetchItemList(routerName) {
  // 리스트 뿌려주는 함수 api쪽에서 에러처리를 하므로 actions에서 별도로 에러처리 안해도 괜찮다.
  try {
    const response = await axios.get(`${config.baseUrl}${routerName}/1.json`);
    return response;
  } catch (error) {
    console.log(erroe);
  }
}

async function fetchUserInfo(username) {
  return await axios.get(`${config.baseUrl}user/${username}.json`);
}

async function fetchItemInfo(id) {
  return await axios.get(`${config.baseUrl}item/${id}.json`);
}

// export -> 다른 컴포넌트에서 사용시 import { fetchNewsList } 와 같은식으로 불러올수있게 (단일이 아니다.)
export { fetchUserInfo, fetchItemInfo, fetchItemList };
