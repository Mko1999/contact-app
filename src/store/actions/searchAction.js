import { SET_SEARCH_VALUE } from "../reducers/searchReducer";

const setSearchValue = (value) => {
  return {
    type: SET_SEARCH_VALUE,
value,  };
};
export default setSearchValue;
