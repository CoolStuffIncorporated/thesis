/* global document */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import history from "./history";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";

render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
