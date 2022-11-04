import axios from 'axios';

// HTTP Request & Response 기본설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// API 함수 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
};

function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
};

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
};

function fetchUserList(){
    return axios.get(`${config.baseUrl}newest/1.json`);
}
// export -> 다른 컴포넌트에서 사용시 import { fetchNewsList } 와 같은식으로 불러올수있게
export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserList
};