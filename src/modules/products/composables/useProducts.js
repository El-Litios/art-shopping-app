import { useStore } from "vuex";
import { computed } from "vue";

const useProducts = () => {
  const store = useStore();
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
  }
};

export default useProducts
