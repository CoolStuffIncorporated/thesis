import { connect } from "react-redux";
import LocationStats from "../components/LocationProfile/LocationStats";

const mapStateToProps = state => {
  return {
    visitedCount: state.visitedCount,
    faveCount: state.faveCount
  };
};

export default connect(mapStateToProps)(LocationStats);
