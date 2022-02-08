import { SET_SEARCH_VALUE } from "../reducers";

export const setSearchValue = (value) => {
  return {
    type: SET_SEARCH_VALUE,
    value,
  };
};
