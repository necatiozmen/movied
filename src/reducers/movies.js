const defaultState = {
  series: [],
  headerTitle: 'Popular Titles',

};

const movies = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_MOVIES_REQUEST':
      return { ...state, getMoviesFromDatabase: false };
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        series: action.data[0],
        getMoviesFromDatabase: true,
      };
    case 'GET_MOVIES_FAILURE':
      return { ...state, getMoviesFromDatabaseFailed: true };
    case 'CHANGE_HEADER_TITLE':
      return { ...state, headerTitle: action.data };
    default:
      return state;
  }
};

export default movies;
