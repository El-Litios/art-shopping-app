export const categoriesInfo = (state) => {
    return state.categories
} 

export const productsInfo = (state) => {
    if (state.selectedItem) {
        return state.products.filter(item =>
            item.category.toLowerCase().includes(state.selectedItem.toLowerCase())
        );
    }
    return state.products.filter(item =>
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
} 