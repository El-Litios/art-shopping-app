import { useStore } from "vuex";
import { computed } from "vue";

const useProducts = () => {
  const store = useStore();
  const getCategories = async() => {
    await  store.dispatch("products/getCategoriesList")
  }

  return {
    getCategories,
    categories: computed(() => store.getters["products/categoriesInfo"]),
  }
};

export default useProducts
