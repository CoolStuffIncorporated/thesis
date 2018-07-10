import axios from "axios";
import * as actions from "./types";

// all logic in action creators and/or utility functions used by action creators!

// helper function for addFaveDestination
function addFaveDestinationSuccess(faveDestinations) {
  return {
    type: actions.ADD_FAV_DESTINATION_SUCCESS,
    faveDestinations
  };
}

// add a country to favorites by user id
export function addFaveDestination(userId, country) {
  console.log('1. hit destinations action to add fave');
  return dispatch => {
    axios
      .post("/favorites", {
        userId,
        country
      })
      .then(({ faveDestinations }) =>
        dispatch(addFaveDestinationSuccess(faveDestinations))
      );
  };
}

// helper function for getFaveDestinations
function getFaveDestinationsSuccess(faveDestinations) {
  return {
    type: actions.GET_FAV_DESTINATIONS_SUCCESS,
    faveDestinations
  };
}

// get list of favorite destinations by user id
export function getFaveDestinations(userId) {
  return dispatch => {
    axios
      .get("/favorites", {
        params: {
          userId
        }
      })
      .then(({ data }) => {
        const destinations = data.map(destination => {
          return destination;
        });
        dispatch(getFaveDestinationsSuccess(destinations));
      });
  };
}

// helper function for addVisitedDestinations
function addVisitedDestinationSuccess(visitedDestinations) {
  return {
    type: actions.ADD_VISITED_DESTINATION_SUCCESS,
    visitedDestinations
  };
}

// add a country to visited destinations by user id
export function addVisitedDestination(userId, country) {
  console.log('1. hit destinations action to add visited');
  return dispatch => {
    axios
      .post("/visited", {
        userId,
        country
      })
      .then(({ visitedDestinations }) => {
        dispatch(addVisitedDestinationSuccess(visitedDestinations));
      });
  };
}

// helper function for getVisitedDestinations
function getVisitedDestinationsSuccess(visitedDestinations) {
  return {
    type: actions.GET_VISITED_DESTINATIONS_SUCCESS,
    visitedDestinations
  };
}

// get list of visited countries by user id
export function getVisitedDestinations(userId) {
  return dispatch => {
    axios
      .get("/visited", {
        params: {
          userId
        }
      })
      .then(({ data }) => {
        const destinations = data.map(destination => {
          return destination;
        });
        dispatch(getVisitedDestinationsSuccess(destinations));
      });
  };
}

// function updateDestinationsFutureAsync(destinations) {
//   return {
//     type: UPDATE_DESTINATIONS,
//     destinationsFuture: DESTINATIONS
//   };
// }

// export function updateDestinationsFuture(destination) {
//   return dispatch => {
//     dispatch(updateDestinationsFutureAsync(destination));
//   };
// }
