import axios from "../axios";
import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE
} from "./types";

// all logic in action creators and/or utility functions used by action creators!

// helper method for action creator
// function addBlogAsync(blog) {
//   return {
//     type: types.ADD_BLOG,
//     payload: blog
//   };
// }

// export function addBlog(blog) {
//   return dispatch => {
//     dispatch(addBlogAsync(blog));
//   };
// }

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
