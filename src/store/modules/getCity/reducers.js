const initialState = "Brasília";

const getCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_CITY":
      return action.string;

    default:
      return state;
  }
};

export default getCityReducer;
