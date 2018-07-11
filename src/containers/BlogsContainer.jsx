import { connect } from "react-redux";
import BlogList from "../components/BlogList/BlogList";
import axios from "../axios";
import { getBlogs } from "../actions";

const mapStateToProps = state => ({
  blogs: state.blogs,
  loading: false
});

const mapDispatchToProps = dispatch => ({
  getBlogs: () => {
    dispatch(getBlogs());
  }
});

const BlogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);

export default BlogsContainer;
