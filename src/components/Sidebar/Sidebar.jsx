import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchContainer from "../../containers/SearchContainer";
import ProfilePhotoContainer from "../../containers/ProfilePhotoContainer.jsx";

const Sidebar = () => (
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
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/friends">
            <ListItemText primary="Friends" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/profile">
            <ListItemText primary="Profile" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/explore">
            <ListItemText primary="Explore" />
          </Link>
        </ListItem>
        <br />
      </List>
    </Drawer>
  </div>
);

export default Sidebar;
