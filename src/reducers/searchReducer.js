import * as actions from "../actions/types";

function attractions(state = [], action) {
  switch (action.type) {
    case actions.GET_ATTRACTIONS_SUCCESS:
      return action.attractions;
    default:
      return state;
  }
}

function pointsOfInterest(state = [], action) {
  switch (action.type) {
    case actions.GET_POINTS_OF_INTEREST_SUCCESS:
      return action.pointsOfInterest;
    default:
      return state;
  }
}

function locationBasicInfo(state = {}, action) {
  switch (action.type) {
    case actions.GET_BASIC_LOCATION_INFO_SUCCESS:
      return action.locationBasicInfo;
    default:
      return state;
  }
}

function visitedCount(state = 0, action) {
  switch (action.type) {
    case actions.GET_VISITED_COUNT:
      return action.visitedCount;
    default:
      return state;
  }
}

function faveCount(state = 0, action) {
  switch (action.type) {
    case actions.GET_FAVE_COUNT:
      return action.faveCount;
    default:
      return state;
  }
}

export {
  attractions,
  pointsOfInterest,
  locationBasicInfo,
  visitedCount,
  faveCount
};
