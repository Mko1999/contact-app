import { contactReducer, searchReducer } from "./reducers";
import { combineReducers } from "redux";

const mainReducer = combineReducers({
  contacts: contactReducer,
  search: searchReducer,
});

export default mainReducer;
