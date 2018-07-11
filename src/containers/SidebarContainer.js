import { connect } from "react-redux";
import setHeader from "../actions/header";
import getFriendsList from "../actions/friendsList";
import Sidebar from "../components/Sidebar/Sidebar";

const mapStateToProps = state => {
  return {
    userId: state.userId
  };
};

const mapDispatchToProps = dispatch => ({
  setHeader: term => dispatch(setHeader(term)),
  getFriendsList: id => dispatch(getFriendsList(id))
});

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
