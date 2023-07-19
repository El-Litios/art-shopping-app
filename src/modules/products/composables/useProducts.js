import { useStore } from "vuex";

const useProducts = () => {
  const store = useStore();
  const getCategories = () => {
     store.dispatch("product/getCategoriesList")
  }

  return {
    getCategories
  }
};

export default useProducts
