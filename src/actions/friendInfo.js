// This should eventually be refactored such that they use
// the GET_USER_INFO_* actions, since they are functionally identical
import axios from "axios";
import {
  GET_FRIEND_INFO_REQUEST,
  GET_FRIEND_INFO_SUCCESS,
  GET_FRIEND_INFO_FAILURE
} from "./types";

function getFriendInfoRequest() {
  return {
    type: GET_FRIEND_INFO_REQUEST
  };
}
function getFriendInfoSuccess(friendInfo) {
  return {
    type: GET_FRIEND_INFO_SUCCESS,
    friendInfo
  };
}
function getFriendInfoFailure(err) {
  return {
    type: GET_FRIEND_INFO_FAILURE,
    err
  };
}

export default function getFriendInfo(userId) {
  return dispatch => {
    dispatch(getFriendInfoRequest());
    axios
      .get("/userInfo", {
        params: {
          userId
        }
      })
      .then(({ data }) => {
        const friendInfo = data.map(info => {
          return info;
        });
        dispatch(getFriendInfoSuccess(friendInfo));
      })
      .catch(err => {
        dispatch(getFriendInfoFailure(err));
      });
  };
}
