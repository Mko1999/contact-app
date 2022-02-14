export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";

export const searchReducer = (state = { value: "" }, { type, value }) => {
  switch (type) {
    case SET_SEARCH_VALUE:
      return { 
        ...state,
        value 
      };
    default:
      return state;
  }
};
