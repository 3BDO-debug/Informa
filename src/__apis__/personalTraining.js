import axiosInstance from './axios';

export const personalTrainingRequester = async (data) =>
  axiosInstance.post('personal-training/request-personal-training', data).then((response) => response.data);
