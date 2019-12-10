import * as constants from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case constants.GET_UPCOMING_MOVIE_SUCCESS:
      return action.payload
    case constants.GET_UPCOMING_MOVIE_FAILURE:
      return action.payload

    default:
      return state
  }
}
