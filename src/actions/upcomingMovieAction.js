import * as constants from '../constants';
import { getUpcomingMovies } from '../services/requestService'


export const getAllUpcomingMovies = () => {
  return async dispatch => {
    try {
      const movies = await getUpcomingMovies()
      dispatch(getMoviesSuccess(movies))

    }
    catch (err){
      console.log(err)
      dispatch(getMoviesFailure())
    }
  }
}

const getMoviesSuccess = (movies) => ({
  type: constants.GET_UPCOMING_MOVIE_SUCCESS,
  payload: movies
})

const getMoviesFailure = () => ({
  type: constants.GET_UPCOMING_MOVIE_FAILURE,
  payload: []
})
