import axiosInstance from './axios';

export const foodItemsFetcher = async () =>
  axiosInstance.get('/meals/food-items-handler').then((response) => response.data);
