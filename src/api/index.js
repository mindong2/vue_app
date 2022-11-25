import axios from "axios";
import store from '../store/index'

// HTTP Request & Response 기본설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// API 함수 정리

function fetchItemList(name) { // 리스트 뿌려주는 함수
  store.commit('startSpinner');
  return axios.get(`${config.baseUrl}${name}/1.json`);
}

function fetchUserInfo(username) {
  store.commit('startSpinner');
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(id) {
  store.commit('startSpinner');
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

// export -> 다른 컴포넌트에서 사용시 import { fetchNewsList } 와 같은식으로 불러올수있게 (단일이 아니다.)
export {
  fetchUserInfo,
  fetchItemInfo,
  fetchItemList
};
