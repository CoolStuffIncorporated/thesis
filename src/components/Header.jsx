import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import * as settings from "../constants";

// The Header creates links that can be used to navigate
// between routes.
const linkStyles = {
  textDecoration: "none"
};
const Header = ({ headerSetting }) => (
  <header>
    <center>
      {settings.HOME === headerSetting ? (
        <span
          style={{
            width: 400,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap"
          }}
        >
          <Link to="/home" style={linkStyles}>
            <Typography>dashboard</Typography>
          </Link>
          <span> | </span>
          <Link to="/blogs" style={linkStyles}>
            <Typography>blog posts</Typography>
          </Link>
          <span> | </span>
          <Link to="/photos_videos" style={linkStyles}>
            <Typography>photos & videos</Typography>
          </Link>
          <span> | </span>
          <Link to="/destinations" style={linkStyles}>
            <Typography>destinations</Typography>
          </Link>
        </span>
      ) : null}
      {settings.LOCATION_PROFILE === headerSetting ? (
        <span
          style={{
            width: 400,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap"
          }}
        >
          <Link to="/search" style={linkStyles}>
            <Typography>overview</Typography>
          </Link>
          <span> | </span>
          <Link to="/attractions" style={linkStyles}>
            <Typography>obscure attractions</Typography>
          </Link>
          <span> | </span>
          <Link to="/photos_videos" style={linkStyles}>
            <Typography>photos & videos</Typography>
          </Link>
          <span> | </span>
          <Link to="/blogs" style={linkStyles}>
            <Typography>blog posts</Typography>
          </Link>
        </span>
      ) : null}
      {settings.USER_PROFILE === headerSetting ? (
        <span
          style={{
            width: 400,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap"
          }}
        >
          <Link to="/profile" style={linkStyles}>
            <Typography>overview</Typography>
          </Link>
          <span> | </span>
          <Link to="/blogs" style={linkStyles}>
            <Typography>blog posts</Typography>
          </Link>
          <span> | </span>
          <Link to="/photos_videos" style={linkStyles}>
            <Typography>photos & videos</Typography>
          </Link>
          <span> | </span>
          <Link to="/destinations" style={linkStyles}>
            <Typography>destinations</Typography>
          </Link>
        </span>
      ) : null}
    </center>
    <br />
  </header>
);

Header.propTypes = {
  headerSetting: PropTypes.string.isRequired
};

export default Header;
