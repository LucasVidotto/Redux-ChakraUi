import { compose, createStore, applyMiddleware } from "redux";
import axiosMiddleware from "redux-axios-middleware";
import rootReducer from "./Redux/reducer";
import axios, { axiosMiddlewareOptions } from "../axios";

const composeEnhancers =
  process.env.REACT_APP_ENV === "production"
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(axiosMiddleware(axios, axiosMiddlewareOptions))
  )
);

export default store;
