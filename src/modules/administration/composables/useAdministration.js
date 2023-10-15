import { useStore } from "vuex";
import { computed, ref } from "vue";

const useAdministration = () => {
  const store = useStore();
  //const searchTerm = ref('');

  const getUsers = async() => {
    await  store.dispatch("administration/getProductsList")
  }


  return {
    getUsers,
    data: computed(() => store.getters["administration/dataInfo"]),
  }
};

export default useAdministration