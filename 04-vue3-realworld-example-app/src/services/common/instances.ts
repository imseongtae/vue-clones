import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { setInterceptors } from './interceptors';

const BASE_URL = 'https://api.realworld.io/api/';

function createInstance(): AxiosInstance {
  return axios.create({
    baseURL: BASE_URL,
  });
}

// HTTP Header 정보를 가공하기 위해
// 인증된 사용자 정보를 갖고 ajax 요청하는 것
function createInstanceWithAuth(): AxiosInstance {
  const instance = axios.create({
    baseURL: BASE_URL,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();

// baseUrl/user
export const authInstance = createInstanceWithAuth();

// https://github.com/imseongtae/pcs-front-ver.2/blob/master/src/store/mutations.js
// state.accessToken = accessToken;
// HTTP 메시지의 헤더에 토큰을 등록하기 위해 axios 의 객체에 토큰을 심어줌
// api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
// api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
