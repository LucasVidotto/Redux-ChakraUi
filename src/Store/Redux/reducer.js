import { combineReducers } from "redux";

import homeReducer from "../Counts/home.reducer";

export default combineReducers({
  home: homeReducer,
});
