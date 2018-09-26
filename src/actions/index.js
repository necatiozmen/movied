import { API } from '../middlewares/api';

export const getMovies = () => ({
  type: 'GET_MOVIES',
  [API]: {
    endpoint: '/getMovies',
  },
});

export const changeHeaderTitle = (data) => ({
  type: 'CHANGE_HEADER_TITLE',
  data,
});
