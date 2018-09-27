const defaultState = {
  series: [],
  movies: [],
  headerTitle: 'Popular Titles',

};

const entries = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_MOVIES_REQUEST':
      return { ...state, getEntriesFromDatabase: false };
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.data,
        getEntriesFromDatabase: true,
      };
    case 'GET_MOVIES_FAILURE':
      return { ...state, getEntriesFromDatabaseFailed: true };
    case 'GET_SERIES_REQUEST':
      return { ...state, getEntriesFromDatabase: false };
    case 'GET_SERIES_SUCCESS':
      return {
        ...state,
        series: action.data,
        getEntriesFromDatabase: true,
      };
    case 'GET_SERIES_FAILURE':
      return { ...state, getEntriesFromDatabaseFailed: true };
    case 'CHANGE_HEADER_TITLE':
      return { ...state, headerTitle: action.data };
    default:
      return state;
  }
};

export default entries;
