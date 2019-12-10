import * as constants from '../constants';
import { getMovies } from '../services/requestService'


export const getAllMovies = () => {
  return async dispatch => {
    try {
      const movies = await getMovies()
      dispatch(getMoviesSuccess(movies))

    }
    catch (err){
      console.log(err)
      dispatch(getMoviesFailure())
    }
  }
}

const getMoviesSuccess = (movies) => ({
  type: constants.GET_MOVIE_SUCCESS,
  payload: movies
})

const getMoviesFailure = () => ({
  type: constants.GET_MOVIE_FAILURE,
  payload: []
})
