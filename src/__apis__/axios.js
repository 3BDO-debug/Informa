import axios from 'axios';

// 127.0.0.1:8000  https://informa-server.herokuapp.com/

export const mainUrl = 'https://informa-server.herokuapp.com/';

const axiosInstance = axios.create({
  baseURL: mainUrl,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export default axiosInstance;
