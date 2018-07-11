/* global document */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import createHistory from "history/createBrowserHistory";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
// <Router history={history}>

render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
