import axios from 'axios';

export const websiteVisitSender = async (data) =>
  axios
    .post('https://basedontech.pythonanywhere.com/website-visitors/websites-visits-handler', data)
    .then((response) => response.data);
