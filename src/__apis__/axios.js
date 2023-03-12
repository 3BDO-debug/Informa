import axios from 'axios';

// http://127.0.0.1:8000  https://informa-server.herokuapp.com/ https://informa-server-v2.herokuapp.com/

export const mainUrl = 'https://informa-server-v2.herokuapp.com';

const axiosInstance = axios.create({
  baseURL: mainUrl,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export default axiosInstance;
