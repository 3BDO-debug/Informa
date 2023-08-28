import axiosInstance from './axios';

export const sendClientDataRequest = async (data) => axiosInstance.post('clients/client-data', data);
