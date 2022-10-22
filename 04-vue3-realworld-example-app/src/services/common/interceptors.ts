import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useUserStore } from '@/stores/user';

/**
 * @see https://github.com/vuejs/pinia/discussions/664
 * @param instance
 * @returns config
 */
export function setInterceptors(instance: AxiosInstance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config: AxiosRequestConfig<any>) {
      const userStore = useUserStore();
      // Do something before request is sent
      if (config.headers) {
        // JWT 혹은 OAuth 토큰 양식은 headers: { authorization: `Bearer ${token}` }
        config.headers.Authorization = `Bearer ${userStore.accessToken}`;
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );
  return instance;
}
