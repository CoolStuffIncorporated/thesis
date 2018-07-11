import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, Redirect } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import SidebarContainer from "../containers/SidebarContainer";
import GlobalMapContainer from "../containers/GlobalMapContainer";
import Home from "./Home";
import HeaderContainer from "../containers/HeaderContainer";
import UserProfile from "./UserProfile/UserProfile";
import LocationProfileContainer from "../containers/LocationProfileContainer";
import AttractionsContainer from "../containers/AttractionsContainer";
import FriendsList from "./FriendsList";
import DestinationsContainer from "../containers/DestinationsContainer";
import PhotosContainer from "../containers/PhotosContainer";
import Explore from "./Explore/Explore";

import * as routes from "../constants/routes";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import AccountPage from "./Account";
import LandingPage from "./Landing";
import withAuthentication from "./Session/withAuthentication";
import Navigation from "./Navigation";

import asyncComponent from "../hoc/asyncComponent";

const asyncBlogs = asyncComponent(() => {
  return import("../containers/BlogsContainer");
});

const App = () => (
  <div className="app">
    <center>
      <Typography variant="display2">Wanderer</Typography>
      <br />
      <GlobalMapContainer />
    </center>
    <SidebarContainer />
    <center>
      <HeaderContainer />
      <Navigation />
      <Switch>
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.HOME} component={() => <Home />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        <Route
          exact
          path={routes.PASSWORD_FORGET}
          component={() => <PasswordForgetPage />}
        />
        <Route exact path={routes.PROFILE} component={() => <UserProfile />} />
        <Route
          exact
          path={routes.SEARCH}
          component={() => <LocationProfileContainer />}
        />
        <Route
          exact
          path={routes.ATTRACTIONS}
          component={() => <AttractionsContainer />}
        />
        <Route exact path={routes.BLOGS} component={() => <asyncBlogs />} />
        <Route exact path={routes.FRIENDS} component={() => <FriendsList />} />
        <Route
          exact
          path={routes.PHOTOS}
          component={() => <PhotosContainer />}
        />
        <Route
          exact
          path={routes.DESTINATIONS}
          component={() => <DestinationsContainer />}
        />
        <Route exact path={routes.EXPLORE} component={() => <Explore />} />
        <Redirect to="/" />
      </Switch>
    </center>
  </div>
);

export default hot(module)(withAuthentication(App));
