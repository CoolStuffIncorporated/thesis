import { connect } from "react-redux";
import Destinations from "../components/Destinations";
import updateNav from "../actions/header";
import {
  getVisitedDestinations,
  getFaveDestinations
} from "../actions/destinations";

const mapStateToProps = state => ({
  navFlag: state.navFlag,
  visitedDestinations: state.visitedDestinations,
  faveDestinations: state.faveDestinations,
  userId: state.userId
});

const mapDispatchToProps = dispatch => ({
  handleNavUpdate: flag => {
    dispatch(updateNav(flag));
  },
  getVisitedDestinations: userId => {
    dispatch(getVisitedDestinations(userId));
  },
  getFaveDestinations: userId => {
    dispatch(getFaveDestinations(userId));
  }
});

const DestinationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Destinations);

export default DestinationsContainer;
