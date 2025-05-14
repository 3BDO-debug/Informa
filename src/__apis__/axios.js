import axios from 'axios';

// http://127.0.0.1:8000  https://informa-7034db3559df.herokuapp.com --/2-33=-3/https://if180-375381fc460c.herokuapp.com 33  https://informa-2f385573ab19.herokuapp.com https://informa180.pythonanywhere.com/ ....

export const mainUrl = 'https://informa-7034db3559df.herokuapp.com';

const axiosInstance = axios.create({
  baseURL: mainUrl,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export default axiosInstance;
