import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
// import CountriesAll from "./components/LocationProfile/CountriesAll";
// import photos from "../example data/pictures-of-japan";
// import rootSagas from "./sagas";
import { HOME } from "./constants";

/*eslint-disable */
const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/* eslint-enable */

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {
    // currentText: "Initializing...",
    headerSetting: HOME,
    // countries: CountriesAll,
    location: "",
    friends: [],
    blogs: [
      {
        blogId: "1",
        blogTitle: "WELCOME TO NIHON",
        blogAuthor: "BROICHI",
        blogContents: "YOLO SWAG"
      },
      {
        blogId: "2",
        blogTitle: "Ebisu Brewery",
        blogAuthor: "BROICHI",
        blogContents: "とりあえず 生 なま ビルください"
      }
    ],
    // photos,
    friendInfo: {},
    userInfo: {},
    pointsOfInterest: [],
    attractions: [],
    locationBasicInfo: {
      languages: [{ name: "" }],
      currencies: [{ name: "" }]
    },
    userId: 1,
    profilePhoto: "",
    albumPhotos: [],
    faveDestinations: [],
    faveCount: 0,
    visitedDestinations: [],
    visitedCount: 0
  },
  composeEnhancers(applyMiddleware(thunk, logger))
);

// sagaMiddleware.run(rootSagas);

export default store;
