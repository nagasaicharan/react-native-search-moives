const INITIAL_STATE = {
  shortlistedMovies: {},
};

export const shortlistReducerTypes = {
  ADD_MOVIE: 'ADD_MOVIE',
  REMOVE_MOVIE: 'REMOVE_MOVIE',
};

export default (state = INITIAL_STATE, action) => {
  const {movie = {}, removeMovieId = ''} = action;
  const {imdbID} = movie;
  switch (action.type) {
    case shortlistReducerTypes.SET_TOKEN:
      return {
        ...state,
        shortlistedMovies: {...state.shortlistedMovies, [imdbID]: movie},
      };
    case shortlistReducerTypes.REMOVE_MOVIE:
      var tempState = Object.assign({}, state.shortlistedMovies);
      delete tempState[removeMovieId];
      return {...state, shortlistedMovies: tempState};
    default:
      return state;
  }
};
