import { CHANGE_USERID, CHANGE_FRIENDSID } from "../actions/types";

function userId(state = null, action) {
  switch (action.type) {
    case CHANGE_USERID:
      return action.userId;
    default:
      return state;
  }
}

function friendsId(state = null, action) {
  switch (action.type) {
    case CHANGE_FRIENDSID:
      return action.friendsId;
    default:
      return state;
  }
}

export { userId, friendsId };
