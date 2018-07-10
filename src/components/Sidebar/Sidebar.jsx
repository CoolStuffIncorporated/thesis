import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchContainer from "../../containers/SearchContainer";
import ProfilePhotoContainer from "../../containers/ProfilePhotoContainer.jsx";
import { HOME } from "../../constants";

const Sidebar = ({ setHeader }) => (
  <div>
    <Drawer
      variant="permanent"
      position="absolute"
      className="docked"
      anchor="left"
    >
      <br />
      <br />
      <br />
      <List component="nav">
        <center>
          <ProfilePhotoContainer />
        </center>
        <br />
        <SearchContainer />
        <br />
        <ListItem button>
          <Link to="/">
            <ListItemText primary="Home" onClick={() => setHeader(HOME)} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/friends">
            <ListItemText primary="Friends" onClick={() => setHeader(HOME)} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/profile">
            <ListItemText primary="Profile" onClick={() => setHeader(HOME)} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/explore">
            <ListItemText primary="Explore" onClick={() => setHeader(HOME)} />
          </Link>
        </ListItem>
        <br />
      </List>
    </Drawer>
  </div>
);

Sidebar.propTypes = {
  setHeader: PropTypes.func.isRequired
};

export default Sidebar;
