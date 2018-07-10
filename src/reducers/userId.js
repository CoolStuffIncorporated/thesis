import { CHANGE_USERID } from "../actions/types";

function userId(state = 0, action) {
  switch(action.type) {
    case CHANGE_USERID:
      return action.userId;
    default:
      return state;
  }
};

export default userId;
