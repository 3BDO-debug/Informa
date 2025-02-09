import axiosInstance from './axios';

export const fetchClientSecret = async (finalPrice, region) =>
  axiosInstance
    .get('clients-management/create-payment-intent', {
      params: { finalPrice, region },
    })
    .then((response) => response.data);

