import * as actions from "./types";

function changeUserId(userId) {
  return {
    type: actions.CHANGE_USERID,
    userId
  };
}

export default changeUserId;
