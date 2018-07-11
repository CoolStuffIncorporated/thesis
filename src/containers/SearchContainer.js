import { connect } from "react-redux";
import changeSelectedLocation from "../actions/location";
import setHeader from "../actions/header";
import {
  getPointsOfInterest,
  getAttractions,
  getLocationBasicInfo,
  getVisitedCount,
  getFaveCount
} from "../actions/search";
import Search from "../components/Search";

const mapStateToProps = state => ({
  location: state.location,
  pointsOfInterest: state.pointsOfInterest,
  attractions: state.attractions
});

const mapDispatchToProps = dispatch => ({
  changeSelectedLocation: term => dispatch(changeSelectedLocation(term)),
  setHeader: term => dispatch(setHeader(term)),
  getLocationBasicInfo: term => dispatch(getLocationBasicInfo(term)),
  getPointsOfInterest: term => dispatch(getPointsOfInterest(term)),
  getAttractions: term => dispatch(getAttractions(term)),
  getVisitedCount: term => dispatch(getVisitedCount(term)),
  getFaveCount: term => dispatch(getFaveCount(term))
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
