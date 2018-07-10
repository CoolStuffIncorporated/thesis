import { LOGIN_REQUESTING } from "./types";

export const loginRequest = ({ email, password }) => {
  return {
    type: LOGIN_REQUESTING,
    email,
    password
  };
};
