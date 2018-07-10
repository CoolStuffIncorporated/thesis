import { connect } from "react-redux";
import BlogList from "../components/BlogList/BlogList";
import axios from "../axios";
import * as actions from "../actions";

const mapStateToProps = state => ({
  blogs: state.blogs,
  loading: false
});

const mapDispatchToProps = dispatch => ({
  getBlogs: () => {
    dispatch(actions.getBlogs());
  }
});

const BlogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);

export default BlogsContainer;
