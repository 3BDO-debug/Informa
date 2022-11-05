import axiosInstance from './axios';

export const inquiryRequester = async (data) =>
  axiosInstance.post('inquires/request-inquiry', data).then((response) => response.data);
