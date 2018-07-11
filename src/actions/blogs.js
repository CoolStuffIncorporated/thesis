import {
  BLOG_REQUESTING,
  BLOG_REQUEST_SUCCESS,
  BLOG_REQUEST_ERROR,
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

export const blogRequest = client => {
  return {
    type: BLOG_REQUESTING,
    client
  };
};

export const blogRequestSuccess = blogs => {
  return {
    type: BLOG_REQUEST_SUCCESS,
    blogs
  };
};

export const blogRequestError = error => {
  return {
    type: BLOG_REQUEST_ERROR,
    error
  };
};
