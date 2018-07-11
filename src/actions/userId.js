import * as actions from "./types";

function changeUserId(userId) {
  return {
    type: actions.CHANGE_USERID,
    userId
  };
}

function changeFriendsId(friendsId) {
  return {
    type: actions.CHANGE_FRIENDSID,
    friendsId
  };
}

export { changeUserId, changeFriendsId };
