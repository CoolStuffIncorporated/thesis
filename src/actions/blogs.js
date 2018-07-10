import axios from "../axios";
import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  BLOG_CREATING,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_ERROR
} from "./types";

export const blogCreate = (client, blog) => {
  return {
    type: BLOG_CREATING,
    client,
    blog
  };
};

export const blogCreateSuccess = blog => {
  return {
    type: BLOG_CREATE_SUCCESS,
    blog
  };
};

export const blogCreateError = error => {
  return {
    type: BLOG_CREATE_ERROR,
    error
  };
};

export const getBlogsRequest = () => {
  return {
    type: GET_BLOGS_REQUEST
  };
};

export const getBlogsSuccess = blogs => {
  return {
    type: GET_BLOGS_SUCCESS,
    blogs
  };
};

export const getBlogsFailure = error => {
  return {
    type: GET_BLOGS_FAILURE,
    error
  };
};

export const getBlogs = () => {
  return dispatch => {
    dispatch(getBlogsRequest());
    return axios
      .get("/blogs")
      .then(res => {
        console.log(res);
        const blogs = res.data.map(blog => {
          return blog;
        });
        dispatch(getBlogsSuccess(blogs));
      })
      .catch(err => {
        console.log(err);
        dispatch(getBlogsFailure(err));
      });
  };
};
