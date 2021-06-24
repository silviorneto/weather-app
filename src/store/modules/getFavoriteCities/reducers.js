const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const getFavoritesReducers = (state = initialState, action) => {
  switch (action.type) {
    case "@fav/add":
      const { string } = action;
      return [...state, string];

    case "@fav/remove":
      const { list } = action;
      return list;

    default:
      return state;
  }
};

export default getFavoritesReducers;
