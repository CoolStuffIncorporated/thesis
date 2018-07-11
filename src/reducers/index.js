import { combineReducers } from "redux";
// import { reducer as form } from "redux-form";
import { faveDestinations, visitedDestinations } from "./destinationsReducer";
import blogs from "./blogReducer";
import { userId, friendsId } from "./userId";
import location from "./locationReducer";
import headerSetting from "./headerReducer";
import {
  pointsOfInterest,
  attractions,
  locationBasicInfo,
  visitedCount,
  faveCount
} from "./searchReducer";
import sessionReducer from "./sessionReducer";
import userReducer from "./userReducer";
import { profilePhoto, albumPhotos } from "./photoReducer";
import userInfo from "./userInfoReducer";
import friendInfo from "./friendInfoReducer";
import friends from "./friendsListReducer";
// import photoReducer from "./photoReducer"; -- currently an empty reducer

// use map, filter, Object.assign() and array destructuring to
// return new version of state!
// No mutations!

const rootReducer = combineReducers({
  location,
  locationBasicInfo,
  attractions,
  pointsOfInterest,
  visitedCount,
  faveCount,
  blogs,
  userId,
  friendsId,
  userInfo,
  friendInfo,
  friends,
  headerSetting,
  faveDestinations,
  visitedDestinations,
  // form,
  // photos,
  profilePhoto,
  // userId,
  sessionState: sessionReducer,
  userState: userReducer,
  albumPhotos
});

export default rootReducer;
