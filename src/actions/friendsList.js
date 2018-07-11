import axios from "axios";
import { GET_FRIENDS_LIST_SUCCESS, GET_FRIENDS_LIST_FAILURE } from "./types";

function getFriendsListSuccess(friends) {
  return {
    type: GET_FRIENDS_LIST_SUCCESS,
    friends
  };
}

function getFriendsListFailure(err) {
  return {
    type: GET_FRIENDS_LIST_FAILURE,
    err
  };
}

export default function getFriendsList(userId) {
  return dispatch => {
    axios
      .get("/friends", {
        params: {
          userId
        }
      })
      .then(({ data }) => {
        const friends = data.map(friend => {
          return friend;
        });
        dispatch(getFriendsListSuccess(friends));
      })
      .catch(err => {
        getFriendsListFailure(err);
      });
  };
}
