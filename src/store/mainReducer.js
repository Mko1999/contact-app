import { contactReducer } from "./contacts/reducers";
import { combineReducers } from "redux";
import { searchReducer } from "./search/reducers";

const mainReducer = combineReducers({
  contacts: contactReducer,
  search: searchReducer,
});

export default mainReducer;
