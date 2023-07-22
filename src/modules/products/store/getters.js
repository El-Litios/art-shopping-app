export const categoriesInfo = (state) => {
    return state.categories
} 

export const productsInfo = (state) => {
    return state.products.filter(item =>
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
} 