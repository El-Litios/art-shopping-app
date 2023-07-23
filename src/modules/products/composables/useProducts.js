import { useStore } from "vuex";
import { computed, ref } from "vue";

const useProducts = () => {
  const store = useStore();
  const searchTerm = ref('');
  const searchItem = ref (null);

  const getCategories = async() => {
    await  store.dispatch("products/getCategoriesList")
  }
  const getProducts = async() => {
    await  store.dispatch("products/getProductsList")
  }

  return {
    getCategories,
    getProducts,
    categories: computed(() => store.getters["products/categoriesInfo"]),
    products: computed(() => store.getters["products/productsInfo"]),
    searchTerm,
    searchItem,
    setSearchTerm: (term) => { store.commit("products/setSearchTerm", term) },
    setSearchItem: (item) => { store.commit("products/setSearchItem", item) }
  }
};

export default useProducts
