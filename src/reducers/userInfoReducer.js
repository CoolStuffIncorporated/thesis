import {
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_FAILURE
} from "../actions/types";
import { updateObject } from "../utility";

const initialState = {
  loading: false
};

function userInfo(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return updateObject(state, { loading: true });
    case GET_USER_INFO_SUCCESS:
      return action.userInfo[0];
    case GET_USER_INFO_FAILURE:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
}

export default userInfo;
