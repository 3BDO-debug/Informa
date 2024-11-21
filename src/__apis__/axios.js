import axios from 'axios';

// http://127.0.0.1:3000 //  https://informa-server.herokuapp.com/ https://informa-server-v2.herokuapp.com/ https://informa180.pythonanywhere.com/ ....

export const mainUrl = 'http://127.0.0.1:8000/';

const axiosInstance = axios.create({
  baseURL: mainUrl,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export default axiosInstance;
