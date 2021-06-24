export const addFavorite = (string) => ({
  type: "@fav/add",
  string,
});

export const removeFavorite = (list) => ({
  type: "@fav/remove",
  list,
});
