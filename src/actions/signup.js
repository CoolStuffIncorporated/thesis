import { SIGNUP_REQUESTING } from "./types";

// const signupRequest = function signupRequest({ email, password }) {
//   return {
//     type: SIGNUP_REQUESTING,
//     email,
//     password
//   };
// };

export const signupRequest = ({ email, password }) => {
  return {
    type: SIGNUP_REQUESTING,
    email,
    password
  };
};

