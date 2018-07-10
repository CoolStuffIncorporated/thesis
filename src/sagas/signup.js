import { call, put, takeLatest } from "redux-saga/effects";
import { handleApiErrors } from "../lib/api-errors";
import {
  SIGNUP_REQUESTING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../actions/types";

// get URL from .env file
const signupUrl = `${process.env.REACT_APP_API_URL}/api/Clients`;

function signupApi(email, password) {
  return fetch(signupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
}

// run when SIGNUP_REQUESTING found by watcher
function* signupFlow(action) {
  try {
    const { email, password } = action;
    // takes calls to signup API and holds
    // until async function is complete
    const response = yield call(signupApi, email, password);

    yield put({ type: SIGNUP_SUCCESS, response });
  } catch (error) {
    yield put({ type: SIGNUP_ERROR, error });
  }
}

// watches for SIGNUP_REQUESTING; when observed
// calls signupFlow with dispatched action
function* signupWatcher() {
  yield takeLatest(SIGNUP_REQUESTING, signupFlow);
}

export default signupWatcher;
