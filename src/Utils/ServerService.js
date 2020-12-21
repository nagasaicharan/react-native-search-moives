import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});
export const API_HANDLER = {
  getRequest: (endpoint, queryParameters = {}) => {
    const params = {
      type: 'movie',
      apikey: 'a1b5f9ec',
    };
    return api
      .get(endpoint, {params: {...params, ...queryParameters}})
      .then((response) => response)
      .catch((error) => error);
  },
};
