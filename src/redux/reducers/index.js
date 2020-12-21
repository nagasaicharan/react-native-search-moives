import {combineReducers} from 'redux';
import MovieShortlistReducer from './MovieShortlistReducer';
import ThemeReducer from './ThemeReducer';

export default combineReducers({
  theme: ThemeReducer,
  movie: MovieShortlistReducer,
});
