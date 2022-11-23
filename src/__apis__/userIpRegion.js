import axios from 'axios';

export const userIpRegionFetcher = async () => axios.get('https://ipapi.co/json/').then((response) => response.data);
