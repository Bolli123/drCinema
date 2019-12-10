import { combineReducers } from 'redux';
import cinema from './cinemaReducer'
import movie from './movieReducer'
import upcomingMovie from './upcomingMovieReducer'


export default combineReducers({
  cinema,
  movie,
  upcomingMovie
});
