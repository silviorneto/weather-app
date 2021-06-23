import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import getCityReducer from "./modules/getCity/reducers";
import getAPIKeyReducer from "./modules/getAPIKey/reducers";

const reducers = combineReducers({
  city: getCityReducer,
  apiKey: getAPIKeyReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
