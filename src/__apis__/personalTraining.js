import { responsive } from 'react-slick-slider/lib/default-props';
import axiosInstance from './axios';

export const personalTrainingRequester = async (data) =>
  axiosInstance.post('personal-training/request-personal-training', data).then((response) => response.data);

export const proceedTrainingRequest = async (requestData) =>
  axiosInstance
    .post('personal-training/proceed-personal-training-request', requestData)
    .then((response) => response.data);

export const clientSubscriptionIdRequest = async (followUpPackage, planType, planDuration, firstName, lastName) =>
  axiosInstance
    .get('/clients/generate-client-subscription-id', {
      params: {
        followUpPackage,
        planType,
        planDuration,
        firstName,
        lastName,
      },
    })
    .then((response) => response.data);

export const registerClientRequest = async (requestData) =>
  axiosInstance.post('/clients-management/clients-handler', requestData).then((response) => response.data);

export const fetchRequestInfo = async (phone) =>
  axiosInstance.get('personal-training/fetch-request-info', { params: { phone } }).then((response) => response.data);
