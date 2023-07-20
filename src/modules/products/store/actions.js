import {db} from '@/api';
import { collection, getDocs, query } from "firebase/firestore";

export const getCategoriesList = async ({commit}) => {
    const categoriesArr = [];
    const categoryCollectionQuery = query(collection(db, "categories"));
    const categoryCollection = await getDocs(categoryCollectionQuery);
    categoryCollection.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let data = doc.data()
                data.id = doc.id
                categoriesArr.push(data)
    });
    commit('setCategories', categoriesArr)
}