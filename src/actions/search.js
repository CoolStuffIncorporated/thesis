import axios from "axios";
import * as actions from "./types";

function getPointsOfInterestSuccess(pointsOfInterest) {
  return {
    type: actions.GET_POINTS_OF_INTEREST_SUCCESS,
    pointsOfInterest
  };
}

export function getPointsOfInterest(term) {
  return dispatch => {
    axios.post("/getPointsOfInterest", { location: term }).then(({ data }) => {
      const pointsOfInterest = data.map(attraction => {
        return attraction;
      });
      dispatch(getPointsOfInterestSuccess(pointsOfInterest));
    });
  };
}

function getAttractionsSuccess(attractions) {
  return {
    type: actions.GET_ATTRACTIONS_SUCCESS,
    attractions
  };
}

export function getAttractions(term) {
  return dispatch => {
    axios.post("/getAttractions", { location: term }).then(({ data }) => {
      const attractions = data.map(attraction => {
        return attraction;
      });
      dispatch(getAttractionsSuccess(attractions));
    });
  };
}

function getLocationBasicInfoSuccess(locationBasicInfo) {
  return {
    type: actions.GET_BASIC_LOCATION_INFO_SUCCESS,
    locationBasicInfo
  };
}

export function getLocationBasicInfo(term) {
  return dispatch => {
    axios.post("/getLocationBasicInfo", { location: term }).then(({ data }) => {
      dispatch(getLocationBasicInfoSuccess(data));
    });
  };
}

function getVisitedCountSuccess(visitedCount) {
  return {
    type: actions.GET_VISITED_COUNT,
    visitedCount
  };
}

export function getVisitedCount(location) {
  return dispatch => {
    axios
      .get("/getVisitedCount", {
        params: {
          location
        }
      })
      .then(data => {
        dispatch(getVisitedCountSuccess(data.data));
      });
  };
}

function getFaveCountSuccess(faveCount) {
  return {
    type: actions.GET_FAVE_COUNT,
    faveCount
  };
}

export function getFaveCount(location) {
  return dispatch => {
    axios
      .get("/getFaveCount", {
        params: {
          location
        }
      })
      .then(data => {
        dispatch(getFaveCountSuccess(data.data));
      });
  };
}
