/* global fetch */
import { call, put, takeLatest } from "redux-saga/effects";
import { handleApiErrors } from "../lib/api-errors";
import { BLOG_CREATING, BLOG_REQUESTING } from "../actions/types";

import {
  blogCreateSuccess,
  blogCreateError,
  blogRequestSuccess,
  blogRequestError
} from "../actions/index";

const blogsUrl = `${process.env.REACT_APP_API_URL}/api/Clients`;

function handleRequest (request) {
  return request
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error })
}

function blogCreateApi(client, blog) {
  const url = `${blogsUrl}/{client.id}/blogs`;
  const request = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: client.token.id || undefined
    },
    body: JSON.stringify(blog)
  });
  return handleRequest(request);
}

function* blogCreateFlow(action) {
  try {
    const { client, blog } = action;
    const createdBlog = yield call(blogCreateApi, client, blog);
    yield put(blogCreateSuccess(createdBlog));
  } catch (error) {
    yield put(blogCreateError(error));
  }
}

function blogRequestApi(client) {
  const url = `${blogsUrl}/${client.id}/blogs`;
  const request = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: client.token.id || undefined
    }
  });
  return handleRequest(request);
}

function* blogRequestFlow(action) {
  try {
    // grab client from action
    const { client } = action;
    const blogs = yield call(blogRequestApi, client);
    yield put(blogRequestSuccess(blogs));
  } catch (error) {
    yield put(blogRequestError(error));
  }
}

function* blogWatcher() {
  yield [
    takeLatest(BLOG_CREATING, blogCreateFlow),
    takeLatest(BLOG_REQUESTING, blogRequestFlow)
  ];
}

export default blogWatcher;
