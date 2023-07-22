export const setCategories = (state, payload) => {
  state.categories = payload;
};

export const setProducts = (state, payload) => {
  state.products = payload;
};

export const setSearchTerm = (state, term) => {
  state.searchTerm = term;
};
