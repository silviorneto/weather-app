import { getAPIKey } from "./actions";

export const getAPIKeyThunk = (key) => (dispatch, getStore) => {
  localStorage.setItem("key", JSON.stringify(key));
  dispatch(getAPIKey(key));
};
