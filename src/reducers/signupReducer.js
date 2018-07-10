import {
  SIGNUP_REQUESTING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../actions/types";

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: []
};

const reducer = function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: "Signing up...", time: new Date() }],
        errors: []
      };
    case SIGNUP_SUCCESS:
      return {
        errors: [],
        messages: [
          {
            body: `Successfully created account for ${action.Response.email}`,
            time: new Date()
          }
        ],
        requesting: false,
        successful: true
      };
    case SIGNUP_ERROR:
      return {
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date()
          }
        ]),
        messages: [],
        requesting: false,
        successful: false
      };
    default:
      return state;
  }
};

export default reducer;
