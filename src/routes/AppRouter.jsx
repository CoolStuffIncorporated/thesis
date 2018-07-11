import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Home from "../components/Home";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/Login";
import Signup from "../components/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute path="/home" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
