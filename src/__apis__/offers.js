import axiosInstance from './axios';

export const announcementsFetcher = async () =>
  axiosInstance.get('/offers/announcements-data').then((response) => response.data);

export const offersFetcher = async () => axiosInstance.get('/offers/offers-data').then((response) => response.data);
