import { API } from '../middlewares/api';

export const getMovies = () => ({
  type: 'GET_QUESTIONS',
  [API]: {
    movies: true,
  },
});
