import axiosInstance from './axios';

export const registerWebsiteLogRequest = async (requestData) =>
  axiosInstance.post('/website-tracking/website-logs-handler', requestData).then((response) => response.data);
