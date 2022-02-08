export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";

export const searchReducer = (state = { value: "" }, { type, value }) => {
  switch (type) {
    case SET_SEARCH_VALUE:
      return { value: value };
    default:
      return state;
  }
};
