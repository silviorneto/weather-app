const initialState = JSON.parse(localStorage.getItem("key")) || "";

const getAPIKeyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "API_KEY":
      return action.string;

    default:
      return state;
  }
};

export default getAPIKeyReducer;
