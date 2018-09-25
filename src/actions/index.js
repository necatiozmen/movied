import { API } from '../middlewares/api';

export const getMovies = () => ({
  type: 'GET_MOVIES',
  [API]: {
    endpoint: '/getMovies',
  },
});
