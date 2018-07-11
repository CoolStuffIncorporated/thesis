import * as actions from "../actions/types";

function faveDestinations(state = [], action) {
  switch (action.type) {
    case actions.ADD_FAV_DESTINATION_SUCCESS:
      return [...state, action.faveDestinations];
    case actions.GET_FAV_DESTINATIONS_SUCCESS:
      return action.faveDestinations;
    default:
      return state;
  }
}

function visitedDestinations(state = [], action) {
  switch (action.type) {
    case actions.ADD_VISITED_DESTINATION_SUCCESS:
      return [...state, action.faveDestinations];
    case actions.GET_VISITED_DESTINATIONS_SUCCESS:
      return action.visitedDestinations;
    default:
      return state;
  }
}

export { faveDestinations, visitedDestinations };
