import { getAPIKey } from "./actions";

export const getAPIKeyThunk = (key) => (dispatch, getStore) => {
  console.log("thunk >", key);

  localStorage.setItem("key", JSON.stringify(key));
  dispatch(getAPIKey(key));
};
