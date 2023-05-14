import axios from 'axios';
import { BASE_URL } from '../../configs/Constant';

export const callApi = async (api, route, formData = {}, params = {}) => {
  let response;
  try {
    const options = {
      url: `${BASE_URL}${api}`,
      method: route,
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      params,
      data: formData,
    };
    const { data } = await axios(options);
    response = data;
  } catch (error) {
    console.log(error.status);
    response = error.status;
  }
  return response;
};
