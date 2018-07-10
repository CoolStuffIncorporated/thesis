import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import CountriesAll from "./components/LocationProfile/CountriesAll";
// import photos from "../example data/pictures-of-japan";
import IndexSagas from "./sagas";
import { HOME } from "./constants";

// /* eslint disable */
// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;
// /* eslint enable */

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/* eslint-enable */

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {
    // currentText: "Initializing...",
    headerSetting: HOME,
    // countries: CountriesAll,
    location: "",
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
    pointsOfInterest: [],
    attractions: [],
    locationBasicInfo: {
      languages: [{ name: "" }],
      currencies: [{ name: "" }]
    },
    userId: 1,
    faveDestinations: [],
    visitedDestinations: [],
    profilePhoto: ""
  },
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware, logger))
);

sagaMiddleware.run(IndexSagas);

export default store;
