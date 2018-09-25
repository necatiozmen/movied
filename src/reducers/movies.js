const defaultState = {
  series: [],

};

const movies = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_MOVIES_REQUEST':
      return { ...state, getMoviesFromDatabase: true };
    case 'GET_MOVIES_SUCCESS':
      return { ...state, series: action.data[0] };
    case 'GET_MOVIES_FAILURE':
      return { ...state, getMoviesFromDatabase: action.error };
    default:
      return state;
  }
};

export default movies;
