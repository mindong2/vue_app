import axios from "axios";

// HTTP Request & Response 기본설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// API 함수 정리

function fetchItemList(name) { // 리스트 뿌려주는 함수
  return axios.get(`${config.baseUrl}${name}/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

// export -> 다른 컴포넌트에서 사용시 import { fetchNewsList } 와 같은식으로 불러올수있게 (단일이 아니다.)
export {
  fetchUserInfo,
  fetchItemInfo,
  fetchItemList
};
