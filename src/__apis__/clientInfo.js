import axiosInstance from './axios';

export const clientInfoRequester = async (data) => axiosInstance.post('programs-generator/user-data', data);
