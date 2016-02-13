import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "./middleware/logger";
import todos from "./reducers/todos";
import thunk from "redux-thunk";

const store = compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(combineReducers({ todos }));

export default store;
