import {
  GET_FRIENDS_LIST_SUCCESS,
  GET_FRIENDS_LIST_FAILURE
} from "../actions/types";
import { updateObject } from "../utility";

function friends(state = [], action) {
  switch (action.type) {
    case GET_FRIENDS_LIST_SUCCESS:
      return action.friends;
    case GET_FRIENDS_LIST_FAILURE:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
}

export default friends;
