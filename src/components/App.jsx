import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, Redirect, Link } from "react-router-dom";
// import { Route, Switch, Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import SidebarContainer from "../containers/SidebarContainer";
import GlobalMapContainer from "../containers/GlobalMapContainer";
import Home from "./Home";
import HeaderContainer from "../containers/HeaderContainer";
import UserProfile from "./UserProfile/UserProfile";
import LocationProfileContainer from "../containers/LocationProfileContainer";
import AttractionsContainer from "../containers/AttractionsContainer";
// import Blogs from "../containers/BlogsContainer";
import FriendsList from "./FriendsList";
import DestinationsContainer from "../containers/DestinationsContainer";
import PhotosContainer from "../containers/PhotosContainer";
import Explore from "./Explore/Explore";
// import NotFoundPage from "./NotFoundPage";
// import LoginPage from "./LoginPage";
import Signup from "./Signup";
import Login from "./Login";
import asyncComponent from "../hoc/asyncComponent";
import Blogs from "../components/AddBlog";

// import { checkIndexAuthorization } from "../lib/check-auth";

const asyncBlogs = asyncComponent(() => {
  return import("../containers/BlogsContainer");
});

const App = () => (
  <div className="app">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    <center>
      <Typography variant="display2">Wanderer</Typography>
      <br />
      <GlobalMapContainer />
    </center>
    <SidebarContainer />
    <center>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/search" component={LocationProfileContainer} />
        <Route path="/attractions" component={AttractionsContainer} />
        <Route path="/blogs" component={asyncBlogs} />
        <Route path="/friends" component={FriendsList} />
        <Route path="/photos" component={PhotosContainer} />
        <Route path="/destinations" component={DestinationsContainer} />
        <Route path="/explore" component={Explore} />
        <Redirect to="/" />
      </Switch>
    </center>
  </div>
);

export default hot(module)(App);
