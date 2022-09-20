import axios from 'axios';

// VITE_BASE_URL: https://api.coingecko.com/api/
function createInstance() {
  return axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
  });
}

export const instance = createInstance();
