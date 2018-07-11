/* global fetch */
import { call, put, takeLatest } from "redux-saga/effects";
import { handleApiErrors } from "../lib/api-errors";
import { BLOG_CREATING } from "../actions/types";

import { blogCreateSuccess, blogCreateError } from "../actions/index";

const blogsUrl = `${process.env.REACT_APP_API_URL}/api/Clients`;

function blogCreateApi(client, blog) {
  const url = `${blogsUrl}/{client.id}/blogs`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: client.token.id || undefined
    },
    body: JSON.stringify(blog)
  })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
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

function* blogWatcher() {
  yield [takeLatest(BLOG_CREATING, blogCreateFlow)];
}

export default blogWatcher;
