import { connect } from "react-redux";
import LoginPage from "../components/LoginPage";
import getUserInfo from "../actions/userInfo";
import setHeader from "../actions/header";
import { getBlogs } from "../actions/blogs";

const mapStateToProps = state => ({
  userId: state.userId
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: id => dispatch(getUserInfo(id)),
  setHeader: term => dispatch(setHeader(term)),
  getBlogs: () => dispatch(getBlogs())
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

export default LoginContainer;
