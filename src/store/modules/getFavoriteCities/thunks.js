import { addFavorite, removeFavorite } from "./actions";
import { toastFavoriteLimitError } from "../../../utils/toastify";
import { capitalize } from "../../../utils";

export const addFavoriteThunk = (city) => (dispatch, getStore) => {
  city = capitalize(city);

  const favList = JSON.parse(localStorage.getItem("favorites")) || [];

  favList.push(city);

  localStorage.setItem("favorites", JSON.stringify(favList));

  dispatch(addFavorite(city));
};

export const removeFavoriteThunk = (city) => (dispatch, getStore) => {
  city = capitalize(city);

  const favList = JSON.parse(localStorage.getItem("favorites")) || [];

  const newList = favList.filter((elem) => elem !== city);

  localStorage.setItem("favorites", JSON.stringify(newList));
  dispatch(removeFavorite(newList));
};
