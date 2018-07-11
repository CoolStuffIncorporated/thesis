import { combineReducers } from "redux";
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
import { profilePhoto, albumPhotos } from "./photoReducer";
import userInfo from "./userInfoReducer";
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
  headerSetting,
  faveDestinations,
  visitedDestinations,
  profilePhoto,
  albumPhotos
  // userId
});

export default rootReducer;
