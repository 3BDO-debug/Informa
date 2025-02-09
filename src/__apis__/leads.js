import axiosInstance from './axios';

export const createLeadRequest = async (requestData) =>
  axiosInstance.post('/leads/lead-request', requestData).then((response) => response.data);
