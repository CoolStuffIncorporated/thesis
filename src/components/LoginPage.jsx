// Eventually, we will have to send some sort of request to the server
// that checks to see whether the user and pw match, then
// is successfully logged in or re-prompted to enter their login information

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { GET_BLOGS_BY_USER_ID } from "../actions/types";
// import { startLogin } from "../actions/auth";

const LoginPage = ({ getUserInfo }) => {
  return (
    <div>
      <Typography variant="headline">Welcome back!</Typography>
      <Typography variant="body2">Click below to sign back in.</Typography>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Button
          type="submit"
          variant="raised"
          color="secondary"
          onClick={() => {
            getUserInfo(1);
          }}
        >
          Sign<br />in
        </Button>
      </Link>
    </div>
  );
};

LoginPage.propTypes = {
  getUserInfo: PropTypes.func.isRequired
  // startLogin: PropTypes.func.isRequired
};

// <Button onClick={startLogin}>Login</Button>

export default LoginPage;
