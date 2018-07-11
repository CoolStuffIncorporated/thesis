import axios from "axios";
import {
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE
} from "./types";

function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  };
}

function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo
  };
}

function getUserInfoFailure(err) {
  return {
    type: GET_USER_INFO_FAILURE,
    err
  };
}

export default function getUserInfo(userId) {
  return dispatch => {
    dispatch(getUserInfoRequest());
    axios
      .get("/userInfo", {
        params: {
          userId
        }
      })
      .then(({ data }) => {
        const userInfo = data.map(info => {
          return info;
        });
        dispatch(getUserInfoSuccess(userInfo));
      })
      .catch(err => {
        dispatch(getUserInfoFailure(err));
      });
  };
}
