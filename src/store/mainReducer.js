import { contactReducer } from "./contacts/reducers";
import { searchReducer } from "./search/reducers";
import { combineReducers } from "redux";

const mainReducer = combineReducers({
  contacts: contactReducer,
  search: searchReducer
});

export default mainReducer;
