import * as constants from '../constants';
import { getCinemas } from '../services/requestService'


export const getAllCinemas = () => {
  return async dispatch => {
    try {
      const cinemas = await getCinemas()
      dispatch(getCinemasSuccess(cinemas))

    }
    catch (err){
      console.log(err)
      dispatch(getCinemasFailure())
    }
  }
}

const getCinemasSuccess = (cinemas) => ({
  type: constants.GET_CINEMAS_SUCCESS,
  payload: cinemas
})

const getCinemasFailure = () => ({
  type: constants.GET_CINEMAS_FAILURE,
  payload: []
})
