import axios from "axios";

// HTTP Request & Response 기본설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// API 함수 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

// export -> 다른 컴포넌트에서 사용시 import { fetchNewsList } 와 같은식으로 불러올수있게 (단일이 아니다.)
export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
};
