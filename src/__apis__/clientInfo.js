import axiosInstance from './axios';

export const clientInfoRequester = async (data) => axiosInstance.post('clients/client-data', data);
